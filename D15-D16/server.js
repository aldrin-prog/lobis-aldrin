const express=require('express');
const mongoose=require("mongoose");
require("dotenv").config();
const app=express();
app.use(express.json());
const port=process.env.PORT || 3000;
const connectToDatabase=async()=>{
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log("DB Connected");
    } catch (error) {
        console.log("Error Connecting to MongoDb "+ error);
    }
} 
app.listen(port,()=>{
    console.log("Server is running in port "+ port);
    connectToDatabase();
});