import express from "express";
import authMiddleware from "../middleware/authMiddleware.js";
import { getUserEvents } from "../controllers/userController.js";
const router=express.Router();

router.get("/events",authMiddleware,getUserEvents);
export default router;