import Event from "../models/Event.js";
import User from "../models/User.js";
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
const updatePofile=async(req,res)=>{
    try {
        const {firstName,lastName}=req.body;
        const updateUser=await User.findByIdAndUpdate(req.user.id,{firstName,lastName},{new:true,runValidators:true});
        res.status(200).json({message:'Profile updated successfully',user:updateUser});

    } catch (error) {
        res.status(500).json({message:'Error updating profile',error});
    }
}
export {getProfile,updatePofile,getUserEvents};