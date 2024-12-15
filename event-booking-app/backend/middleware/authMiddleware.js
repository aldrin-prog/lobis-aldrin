import jwt from "jsonwebtoken";
import User from "../models/User.js";
const authMiddleware=async (req,res,next)=>{
    const token=req.cookies["auth_token"];
    if(!token)
        return res.status(403).json({message:"No token, access denied"});
    try {
        const decoded=jwt.verify(token,process.env.JWT_SECRET_KEY);
        req.user= await User.findById(decoded.id).select("-password");
        next();
    } catch (error) {
        if(error.name==='TokenExpiredError')
            return res.status(401).json({message:"Token Expired"});
        res.status(401).json({message:"Invalid token"});
    }
}
export default authMiddleware;