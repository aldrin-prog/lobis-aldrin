import { destroy, getEventById, getEvents, storeEvent,updateEvent } from "../controllers/eventController.js";
import express from "express";
import authMiddleware from "../middleware/authMiddleware.js";
import { check } from "express-validator";
import adminMiddleware from "../middleware/adminMiddleware.js";
const eventValidation=[
    check("title", "Title is required").notEmpty(),
    check("description", "Description is required").notEmpty(),
    check("date","Date is required").notEmpty()
];
const router=express.Router();
router.get('/',getEvents);
router.get('/:id',getEventById);
router.post('/',authMiddleware,eventValidation,storeEvent);
router.put('/:id',authMiddleware,eventValidation,updateEvent);
router.delete('/:id',authMiddleware,destroy);
router.post('/test-cookies',(req,res)=>{
    console.log(req.cookies);
})
export default router;