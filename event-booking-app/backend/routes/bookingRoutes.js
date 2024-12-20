import express from "express";
import createPaymentIntent from "../utils/stripe.js";
import { createBooking, getUserBookingByEvent, processPayment, updateBookingStatus } from "../controllers/bookingController.js";
import authMiddleware from "../middleware/authMiddleware.js";

const router=express.Router();
router.post("/:id/process-payment",authMiddleware,processPayment);
router.put("/:id/update-payment-status",authMiddleware,updateBookingStatus);
router.post("/get-user-event-booking",authMiddleware,getUserBookingByEvent);
// router.post(
//     "/:id/process-payment",
//     authMiddleware,
//     async (req, res, next) => {
//         try {
//             const response = await processPayment(req, res,next);
//             await updateBookingStatus(req,res,next);
//             res.status(200).json({ message: 'Payment and booking successful'});
//             // next();
//         } catch (error) {
//             console.error(error.message)
//             // next(error); // Pass errors to a centralized error handler
//         }
//     }
// );
export default router;