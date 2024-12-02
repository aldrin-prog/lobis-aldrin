import mongoose from "mongoose";
const seminarSchema=new mongoose.Schema({
    title:{type:String,required:true},
    description:{type:String,required:true},
    timeFrame:{
        from:{type:String,required:true},
        to:{type:String,required:true},
    },
    venue:{type:String,required:true},
    speaker:{name:{type:String,required:true},
            image:{type:String},linkedin:{type:String}},
},
{timestamps:true}
);
export default mongoose.model('Seminar',seminarSchema);
