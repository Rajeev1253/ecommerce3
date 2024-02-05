import express from 'express';
import Formidable from 'express-formidable';
import { IsAdmin, requireSignIn } from '../middleware/authMiddleware.js';
import { SingleProduct, createProductController, getAllProductController, productPhotoController } from '../Controllers/productController.js';

const router = express.Router();

router.post("/createProduct",requireSignIn,IsAdmin,Formidable(),createProductController);
router.get("/getProduct",getAllProductController);
router.get("/getSingle/:slug",SingleProduct);
router.get("/getphoto/:pid",productPhotoController);


export default router;