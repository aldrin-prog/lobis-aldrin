import { validationResult } from "express-validator";
import Event from "../models/Event.js";
import User from "../models/User.js";
import Booking from "../models/Booking.js";
const getProfile=async (req,res)=>{
    try {
        const user=await User.findById(req.user.id).select('-password');
        if(!user)
            return res.status(404).json({message:'User not found'});
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({message:'Error fetching profile',error});
    }
}
const getUserEvents=async(req,res)=>{
    try {
        const user=req.user;
        const events=await Event.find({user:user._id});
        res.status(200).json(events);
    } catch (error) {
        res.status(500).json({message:"Server Error",error});
    }
}
const getUserBookings=async(req,res)=>{
    try {
        const bookings=await Booking.find({user:req.user.id}).populate("event");
        res.status(200).json(bookings);
    } catch (error) {
        res.status(500).json({messsage:"Server Error",error});
    }
}
const updatePofile=async(req,res)=>{
    const errors=validationResult(req);
    if(!errors.isEmpty())
        return res.status(400).json({message:errors.array()});
    try {
        const {firstName,lastName,email,occupation,aboutSelf,homeAddress,phoneNumber,website}=req.body;
        console.log(req.body)
        const updateUser=await User.findByIdAndUpdate(req.user.id,{firstName,lastName,email,occupation,aboutSelf,homeAddress,phoneNumber,website},{new:true,runValidators:true}).select(["-password","-profileImage"]);
        res.status(200).json({message:'Profile updated successfully',user:updateUser});
    } catch (error) {
        res.status(500).json({message:'Error updating profile',error});
    }
}
const updateProfileImage = async (req, res) => {
    try {
        if (req.file) {
            const filePath = req.file.path;
            const profileImageUpdate = await User.findByIdAndUpdate(
                req.user.id,
                { profileImage: filePath },
                { new: true, runValidators: true }
            ).select("-password");
            
            res.status(200).json(profileImageUpdate);
        } else {
            throw new Error("Unable to upload image");
        }
    } catch (error) {
        res.status(500).json({ message: "Server Error", error });
    }
};

export {getProfile,updatePofile,getUserEvents,updateProfileImage,getUserBookings};