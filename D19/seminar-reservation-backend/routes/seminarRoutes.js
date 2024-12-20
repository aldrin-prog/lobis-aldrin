import express from "express";
import { getSeminars,createSeminar, updateSeminar, deleteSeminar, getSeminarDetails } from "../controllers/seminarController.js";
import adminMiddleware from "../middleware/adminMiddleware.js";
import authMiddleware from "../middleware/authMiddleware.js";
const router=express.Router();
router.get('/seminars',getSeminars);
router.post('/seminars',authMiddleware,adminMiddleware,createSeminar);
router.put('/seminars/:id',authMiddleware,adminMiddleware,updateSeminar);
router.delete('/seminars/:id',authMiddleware,adminMiddleware,deleteSeminar);
router.get('/seminars/:id',getSeminarDetails);
export default router; 