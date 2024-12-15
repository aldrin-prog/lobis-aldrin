import mongoose from "mongoose";
const bookingSchema=new mongoose.Schema({
    user:{type:mongoose.Schema.Types.ObjectId,ref:'User',required:true},
    event:{type:mongoose.Schema.Types.ObjectId,ref:'Event',required:true},
    paymentStatus:{type:String,enum:['pending','confirmed'],default:'pending'},
    proofOfPayment:{type:String}
},
{timestamps:true}
);
bookingSchema.index({ user: 1, event: 1 }, { unique: true}); 
export default mongoose.model("Booking",bookingSchema);