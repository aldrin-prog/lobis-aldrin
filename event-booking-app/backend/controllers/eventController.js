import Event from "../models/Event.js";
import { validationResult } from "express-validator";
const storeEvent=async (req,res)=>{
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ message: errors.array() });
    }
    try {
        req.body.user=req.user._id
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
        const{id}=req.params;
        const event=await Event.findById(id);
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