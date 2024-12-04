import bcrypt from 'bcryptjs';
import jwt, { decode } from 'jsonwebtoken';
import User from '../models/User.js';

const register=async (req, res)=>{
    try {
        const {firstName,lastName,email,password}=req.body;
        const existingUser=await User.findOne({email});
        if(existingUser)
            return res.status(400).json({error:"User already exist"})
        const hashedPassword=await bcrypt.hash(password,10);
        const user = await User.create({firstName,lastName,email,password:hashedPassword});
        res.status(201).json({message:'User registered successfully',user});
    } catch (error) {
        res.status(500).json({error:'Server error',message:error});
    }
}
const login = async (req,res)=>{
    try {
        const {email,password}=req.body;
        const user=await User.findOne({email});
        if(!user)
            return res.status(404).json({error:'User not found'});
        const isMatch= await bcrypt.compare(password,user.password);
        if(!isMatch)
            return res.status(400).json({error:'Invalid credentials'});
        const token=jwt.sign({id:user._id},process.env.JWT_SECRET,{expiresIn:'1h'});
        res.status(200).json({token,user:{id:user._id,name:`${user.firstName} ${user.lastName}`,email:user.email,role:user.role}});

    } catch (error) {
        
    }
}
const verifyToken=(req,res)=>{
    try {
        const {token}=req.body;
        const decoded= jwt.verify(token,process.env.JWT_SECRET);
        res.status(200).json({message:"Token is valid",isValid:true});
    } catch (error) {
        if (error.name === 'TokenExpiredError') {
            return res.status(403).json({ message: 'Token has expired' });
        } else if (error.name === 'JsonWebTokenError') {
        return res.status(403).json({ message: 'Invalid token' });
        } else {
            return res.status(500).json({ message: 'Failed to authenticate token' });
        }
    }
}
export {register,login,verifyToken}; 