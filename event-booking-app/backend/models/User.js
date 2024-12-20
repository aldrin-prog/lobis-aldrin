import mongoose from "mongoose";
const userSchema=new mongoose.Schema({
    firstName:{type:String,required:true},
    lastName:{type:String,required:true},
    email:{type:String,required:true,unique:true},
    password:{type:String,required:true},
    homeAddress:{type:String,default:""},
    profileImage:{type:String,default:""},
    phoneNumber:{type:String,default:""},
    website:{type:String,default:""},
    aboutSelf:{type:String,default:""},
    occupation:{type:String,default:""},
    role:{type:String,default:"user"}
},{timestamps:true});

export default mongoose.model('User',userSchema);