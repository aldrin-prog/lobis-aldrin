import mongoose from "mongoose";
const eventSchema=new mongoose.Schema({
    user:{type:mongoose.Schema.Types.ObjectId,ref:"user",required:true},
    title:{type:String,required:true},
    tags:{type:String},
    description:{type:String,required:true},
    date:{type:String,required:true},
    timeFrame:{
        from:{type:String,required:true},
        to:{type:String,required:true},
    },
    image:{type:String,default:""},
    venue:{type:String,required:true},
    fee:{type:Number,required:true},
    slotsAvailable: {type:Number,default:0},
},
{timestamps:true}
);
export default mongoose.model('Event',eventSchema);