import express, { json } from "express";
import mongoose from "mongoose";
import cors from 'cors'
import dotenv from 'dotenv'
import authRoutes from "../routes/authRoutes.js";
dotenv.config();
const app=express();
const db_conn=()=>{
    mongoose.connect(process.env.MONGO_URI_TEST);
}
db_conn();
app.use(cors());
app.use(json());
app.use("/api/auth/",authRoutes);
export default app;