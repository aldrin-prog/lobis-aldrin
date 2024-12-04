import Seminar from "../models/Seminar.js";
import Booking from "../models/Booking.js";
import sendEmail from "../utils/email.js";
const notifiyAttendees=async (attendees)=>{
    try {
        // to,subject,text,html
        const to=attendees.join(',');
        const subject="Test subject";
        const text="text test";
        const html="<p>Please check the seminar</p>";
        await sendEmail(to,subject,text,html);
    } catch (error) {
        
    }
}
const getSeminars = async (req,res) =>{
    try {
        const seminars=await Seminar.find();
        console.log(seminars)

        res.status(200).json(seminars);
    } catch (error) {
        res.status(500).json({message:'Error fetching seminars',error});
    }
}
const createSeminar=async (req,res)=>{
    try {
        console.log(req.body);
        const seminar=await Seminar.create(req.body);

        res.status(201).json({message:'Seminar created successfully',seminar});
    } catch (error) {
        res.status(500).json({message:'Error creating seminar',error});
    }
}
const updateSeminar=async (req,res)=>{
    try {
        const {id}          = req.params;
        const updateSeminar = await Seminar.findByIdAndUpdate({_id:id},req.body,{new:true});
        const attendees     = await Booking.find({seminar:id},{user:1,_id:0})
                            .populate('user','email').lean().then(results=>results.map(item=>item.user.email));
        
        // console.log(attendees);
        await notifiyAttendees(attendees);
        res.status(200).json({message:'Seminar updated successfully',seminar:updateSeminar});
    } catch (error) {
        res.status(500).json({message:'Error updating seminar',error});
    }
}
const deleteSeminar=async (req,res)=>{
    try {
        await Seminar.findByIdAndDelete(req.params.id);
        res.status(200).json({message:'Seminar deleted Successfully'});
    } catch (error) {
        res.status(500).json({message:'Error deleting seminar',error});
    }
}
const getSeminarDetails=async(req,res)=>{
    try {
        const seminar=await Seminar.findById(req.params.id);
        if(!seminar)
            return res.status(404).json({message:'Seminar not found'});
        res.status(200).json(seminar);
    } catch (error) {
        res.status(500).json({message:'Error fetching seminar details',error});
    }
}
export {getSeminars,createSeminar,updateSeminar,deleteSeminar,getSeminarDetails}