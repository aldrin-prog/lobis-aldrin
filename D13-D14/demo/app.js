const express=require("express");
const mongoose=require("mongoose");
const todoRoutes=require("./routes/todoRoutes")
require("dotenv").config();
const app=express();
app.use(express.json());
const port=process.env.PORT || 3000;
const connectToDatabase=async()=>{
    try {
        await mongoose.connect("mongodb+srv://aldrin:Xy9Y4bfZvjifPHx2@cluster0.vckiu.mongodb.net/")
        console.log("DB Connected");
    } catch (error) {
        console.log(error);
    }
} 
// Routes
app.use('/',todoRoutes);
app.listen(port,()=>{
    console.log("Server is running in port "+ port);
    connectToDatabase();
});