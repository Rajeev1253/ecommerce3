import express from 'express';
import { IsAdmin, requireSignIn } from '../middleware/authMiddleware.js';
import { DeleteController, createCategoryController, getAllCategoryController, getSingleCategoryController, updateCategoryController } from '../Controllers/categoryController.js';
const router = express.Router();

router.post('/create-category',requireSignIn,IsAdmin, createCategoryController)
router.put('/update-category/:id',requireSignIn,IsAdmin,updateCategoryController)
router.get('/get-all', getAllCategoryController)
router.get('/get-single/:slug',getSingleCategoryController)
router.delete('/delete-category/:id',DeleteController)

export default router