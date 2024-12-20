import { destroy, getEventById, getEvents, storeEvent,updateEvent } from "../controllers/eventController.js";
import express from "express";
import authMiddleware from "../middleware/authMiddleware.js";
import { check } from "express-validator";
import adminMiddleware from "../middleware/adminMiddleware.js";
import createPaymentIntent from "../utils/stripe.js";
import { createBooking, processPayment } from "../controllers/bookingController.js";
import multer from "multer";
import cloudinaryStorage from "../utils/cloudinaryStorage.js";
const eventValidation=[
    check("title", "Title is required").notEmpty(),
    check("description", "Description is required").notEmpty(),
    check("date","Date is required").notEmpty()
];

const router=express.Router();
const upload=multer({storage:cloudinaryStorage});
router.get('/',getEvents);
router.get('/:id',getEventById);
router.post('/',authMiddleware,upload.single("image"),eventValidation,storeEvent);
router.put('/:id',authMiddleware,upload.single("image"),eventValidation,updateEvent);
router.post('/:id/create-booking',authMiddleware,createBooking);
router.delete('/:id',authMiddleware,destroy);

export default router;