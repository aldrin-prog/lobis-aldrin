import multer from "multer";
import { v2 as cloudinary } from "cloudinary"; // Destructure v2 as cloudinary
import { CloudinaryStorage } from "multer-storage-cloudinary";
import  dotenv from "dotenv";
// Configure Cloudinary
dotenv.config();
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME, // Replace with your Cloud name
  api_key: process.env.CLOUDINARY_API_KEY,       // Replace with your API Key
  api_secret: process.env.CLOUDINARY_API_SECRET, // Replace with your API Secret
});

// Configure Multer Storage with Cloudinary
const cloudinaryStorage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: "uploads",           // Folder name in Cloudinary
    allowed_formats: ["jpg", "png", "jpeg"], // File formats allowed
  },
});

export default cloudinaryStorage;
