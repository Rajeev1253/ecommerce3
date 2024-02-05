import express from 'express';
import formidable from 'formidable';
import { IsAdmin, requireSignIn } from '../middleware/authMiddleware';
import { createProductController } from '../Controllers/productController';
const router = express.Router();

router.post("/createProduct",requireSignIn,IsAdmin,formidable(),createProductController);


export default router;