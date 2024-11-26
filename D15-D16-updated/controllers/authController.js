import User from '../models/User.js';
import bcrypt from 'bcryptjs'; 
import jwt from 'jsonwebtoken';
// Register a new user
const registerUser=async (req,res)=>{
    try { 
        const {name,email,password}=req.body;
        const existingUser = await User.findOne({email:email});
        if(existingUser)
            return res.status(400).json({error:"User existed"});
        const hashPassword=await bcrypt.hash(password,10);
        const newUser=await User.create({name:name,email:email,password:hashPassword});
        res.status(201).json(newUser);
    } catch (error) {
        res.status(500).json({ error: 'Server error' +error })
    }
}
const loginUser=async (req,res)=>{
    try {
        const{email,password}=req.body;
        const user= await User.findOne({email:email});
        if(!user)
            return res.status(404).json({error:"User not found"});
        const isMatched=await bcrypt.compare(password,user.password);
        if(!isMatched)
            return res.status(400).json({error:"Invalid credentials"});
        //Generate JWT web token with user Id as payload
        const token = jwt.sign({_id:user.id},process.env.JWT_SECRET,{expiresIn:"1h"});
        res.status(200).json({
            token,
            user:{
                id:user._id,
                name:user.name,
                email:user.email
            }
        });
    } catch (error) {
        res.status(500).json({error:"Server error " +error});
    }
}
// Login User
export {registerUser,loginUser};