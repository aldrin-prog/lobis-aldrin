import express from "express";
import { login, logout, register, verifyToken } from "../controllers/authController.js";
import { check } from "express-validator";
const router=express.Router();

router.post('/register',
    [
        check("firstName", "First Name is required").isString(),
        check("lastName", "Last Name is required").isString(),
        check("email", "Email is required").isEmail(),
        check("password", "Password with 6 or more characters required").isLength({
          min: 6,
        }),
      ],register);
router.post('/login',login);
router.post('/logout',logout);
router.get('/verify-token',verifyToken);
export default router;