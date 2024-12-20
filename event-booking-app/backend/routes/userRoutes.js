import express from "express";
import authMiddleware from "../middleware/authMiddleware.js";
import { getUserEvents, updatePofile, updateProfileImage } from "../controllers/userController.js";
import { check } from "express-validator";
import multer from "multer";
import cloudinaryStorage from "../utils/cloudinaryStorage.js";
import { getUserBookings } from "../controllers/bookingController.js";
const router=express.Router();
const upload=multer({storage:cloudinaryStorage});
const userValidation=[
    check("firstName", "First Name is required").notEmpty(),
    check("lastName", "Last Name is required").notEmpty(),
    check("email","Email is required").notEmpty()
];
router.get('/bookings',authMiddleware,getUserBookings);
router.get("/events",authMiddleware,getUserEvents);
router.put("/update-profile",authMiddleware,userValidation,updatePofile);
router.post("/update-profile-image",authMiddleware,upload.single("image"),updateProfileImage)
export default router;