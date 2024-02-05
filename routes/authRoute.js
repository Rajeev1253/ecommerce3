import express from "express";
import {
  registerController,
  loginController,
  testController,
  forgetPasswordController,
} from "../Controllers/authController.js";
const router = express.Router();
import { IsAdmin, requireSignIn } from "../middleware/authMiddleware.js";

router.post("/register", registerController);
router.post("/login", loginController);
router.post("/test", requireSignIn, IsAdmin, testController);
router.post("/forgot-password", forgetPasswordController);

//private route
router.get("/user-auth", requireSignIn, (req, res) => {
  res.status(200).send({
    ok: true,
  });
});
router.get("/admin-auth", requireSignIn, IsAdmin, (req, res) => {
  res.status(200).send({
    ok: true,
  });
});
export default router;
