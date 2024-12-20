import Booking from "../models/Booking.js";
import Event from "../models/Event.js";
import { validationResult } from "express-validator";
import User from "../models/User.js";
import jwt from "jsonwebtoken";
const storeEvent=async (req,res)=>{
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ message: errors.array() });
    }
    try {
        req.body.user=req.user._id;
        req.body.timeFrame=JSON.parse(req.body.timeFrame);
        req.body.image=req.file?req.file.path:"";      
        const event=await Event.create(req.body);
        res.status(201).json({message:"Event Created",event});
    } catch (error) {
        res.status(500).json({message:"Server Error",error});
    }
}
const updateEvent=async(req,res)=>{
    const errors=validationResult(req);
    if(!errors.isEmpty())
        return res.status(400).json({message:errors.array()})

    try {
        const {id}=req.params;
        req.body.timeFrame=JSON.parse(req.body.timeFrame)
        req.body.image=req.file?req.file.path:req.body.image;       
        const event=await Event.findByIdAndUpdate(id,req.body);
        res.status(200).json({message:"Event Updated",event});
    } catch (error) {
        res.status(500).json({message:"Server Error",error})
    }
}
const getEvents=async(req,res)=>{
    try {
        const events= await Event.find();
        res.status(200).json(events);
    } catch (error) {
        res.status(500).json({message:"Server Error",error});
    }
}
const getEventById=async(req,res)=>{
    try {
        const token=req.cookies["auth_token"];
        
        const{id}=req.params;
        // const {decoded,error}= jwt.verify(token,process.env.JWT_SECRET_KEY);
        // console.log(error)
        // if(decoded){
        
        const event=await Event.findById(id);
        const eventUserBooked=await Booking.findOne({event:id})
        if(!event)
            return res.status(404).json({message:"Event not found!"});
        res.status(200).json(event);
    } catch (error) {
        res.status(500).json({message:"Server Error",error});
    }
}
const destroy=async (req,res)=>{
    try {
        const {id}=req.params;
        const user=req.user;
        const event=await Event.findOneAndDelete({_id:id,user:user.id});
        if(!event)
            return res.status(404).json({message:"Event not found"});
        res.status(204).json({message:"Event Deleted"});
    } catch (error) {
        res.status(500).json({message:"Server Error",error});
    }
}
export {storeEvent,updateEvent,getEvents,getEventById,destroy}