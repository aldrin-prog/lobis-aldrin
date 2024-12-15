import express from "express";
import createPaymentIntent from "../utils/stripe.js";
import { createBooking, updateBookingStatus } from "../controllers/bookingController.js";

const router=express.Router();
// router.post('/create-payment-intent',authMiddleware,createPaymentIntent,createBooking,updateBookingStatus);
export default router;