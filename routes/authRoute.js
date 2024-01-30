import express from 'express';
import {registerController,loginController,testController} from '../Controllers/authController.js'
const router = express.Router();
import { IsAdmin, requireSignIn } from '../middleware/authMiddleware.js';

router.post('/register',registerController);
router.post('/login',loginController);
router.post('/test',requireSignIn,IsAdmin,testController);
export default router;