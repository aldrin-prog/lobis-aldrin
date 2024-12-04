import mongoose from "mongoose";
const seminarSchema=new mongoose.Schema({
    title:{type:String,required:true},
    description:{type:String,required:true},
    date:{type:String,required:true},
    timeFrame:{
        from:{type:String,required:true},
        to:{type:String,required:true},
    },
    venue:{type:String,required:true},
    speaker:{name:{type:String,required:true},
            image:{type:String},linkedin:{type:String}},
    fee:{type:Number,required:true,},
    slotsAvailable: {type:Number,default:0},

},
{timestamps:true}
);
export default mongoose.model('Seminar',seminarSchema);
