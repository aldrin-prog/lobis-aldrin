import { createBlog,getBlogById,getBlogs } from '../controllers/blogController.js';
import authMiddleware from '../middleware/authMiddleware.js';
import express from 'express';
const router = express.Router();
router.post('/',authMiddleware,createBlog);
router.get('/',authMiddleware,getBlogs);
router.get('/:id',authMiddleware,getBlogById);
export default router;