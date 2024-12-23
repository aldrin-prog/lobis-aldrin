import express, { json } from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./utils/db_connection.js";
import authRoutes from "./routes/authRoutes.js";
import eventRoutes from "./routes/eventRoutes.js";
import cookieParser from "cookie-parser";
import bookingRoutes from "./routes/bookingRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import { getEvents } from "./controllers/eventController.js";
dotenv.config();

const app = express();
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    origin: process.env.FRONTEND_URL,
    credentials: true,
  })
);
// app.get("/",async (req,res)=>{
//   // try {
//   //   const events=await Event.find();
//   //   res.status(200).json(events);  
//   // } catch (error) {
//   //   res.status(500).json({message:"Server Error",error});
//   // }
//   try {
//     await connectDB();
//     // await mongoose.connection.db.command({ ping: 1 });
//     res.status(200).send("MongoDB is connected!");
//   } catch (error) {
//     res.status(500).json({message:"Mongo db not connected",error});
//     // res.status(500).send("MongoDB is not connected.");
//   }
// })
// app.use("/",eventRoutes);
app.get("/api/events",getEvents)
app.use("/api/auth/", authRoutes);
app.use("/api/events", eventRoutes);
app.use("/api/user",userRoutes);
app.use("/api/bookings",bookingRoutes);
const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Listing to port ${port}`);
  // connectDB();
});
