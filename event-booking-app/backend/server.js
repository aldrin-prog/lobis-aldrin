import express, { json } from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./utils/db_connection.js";
import authRoutes from "./routes/authRoutes.js";
import eventRoutes from "./routes/eventRoutes.js";
import cookieParser from "cookie-parser";
import bookingRoutes from "./routes/bookingRoutes.js";
import userRoutes from "./routes/userRoutes.js";
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

app.use("/api/auth/", authRoutes);
app.use("/api/events", eventRoutes);
app.use("/api/user",userRoutes);
app.use("/api/bookings",bookingRoutes);
const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Listing to port ${port}`);
  connectDB();
});
