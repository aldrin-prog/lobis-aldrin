import User from "../models/User.js";
import { validationResult } from "express-validator";
import cookieParser from "cookie-parser";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
const register=async(req,res)=>{
    try {
        const errors=validationResult(req);
        if(!errors.isEmpty())
            return res.status(400).json({message:errors.array()})
        const {firstName,lastName,email,password}=req.body;
        const userExisted=await User.findOne({email:email});
        if(userExisted)
            return res.status(400).json({message:"User already existed",type:"error"})
        const hashedPassword=await bcrypt.hash(password,10);
        const newUser=await User.create({firstName,lastName,email,password:hashedPassword});
        res.status(201).json({message:"Created new User",type:"success"});
    } catch (error) {
        res.status(500).json({message:"Server Error",type:"error",error});
    }
}
const login=async(req,res)=>{
    try {
        const errors=validationResult(req);
        if(!errors.isEmpty())
            return res.status(400).json({message:errors.array()})
        const {email,password}=req.body;
        const user= await User.findOne({email:email});
        if(!user)
            return res.status(404).json({message:"No User found!"});
        const isMatched=await bcrypt.compare(password,user.password);
        if(!isMatched)
            return res.status(400).json({message:"Invalid credentials"});
        const token=jwt.sign({id:user._id},process.env.JWT_SECRET_KEY,{expiresIn:'1d'});
        res.cookie("auth_token",token,{
            httpOnly:true,
            secure: true,     
            maxAge:86400000,
            sameSite:'None'
        });
        res.status(200).json({token,user:{firstName:user.firstName,lastName:user.lastName,email:user.email,role:user.role}});
    } catch (error) {
        res.status(500).json({message:"Server Error",error})
    }
}
const logout=(req,res)=>{
    res.clearCookie('auth_token', {
        httpOnly: true,  // Ensure the cookie is not accessible from JavaScript
        secure: true,   // Set to `true` if you're using HTTPS
        sameSite: 'None', // Required for cross-origin cookies
        path: '/',       // Ensure the cookie is cleared for the entire app
    });
    res.status(200).json({ message: 'Logged out successfully' });

}
const verifyToken=async(req,res)=>{
    const token=req.cookies["auth_token"];
    if(!token)
        return res.status(403).json({message:"No token, access denied"});
    try {
        const decoded=jwt.verify(token,process.env.JWT_SECRET_KEY);
        const user=await User.findById(decoded.id).select("-password");
        res.status(200).json(user);
    } catch (error) {
        if(error.name==='TokenExpiredError')
            return res.status(401).json({message:"Token Expired"});
        res.status(401).json({message:"Invalid token"});
    }
}
export {register,verifyToken,login,logout}