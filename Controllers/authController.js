import { comparePassword, hashPassword } from "../helper/auth.helper.js";
import userModel from "../models/userModel.js";
import JWT from "jsonwebtoken";

export const registerController = async (req, res) => {
  try {
    const { name, email, password, answer } = req.body;

    //validation
    if (!name) {
      return res.send({ message: `name is required` });
    }
    if (!email) {
      return res.send({ message: `email is required` });
    }
    if (!password) {
      return res.send({ message: `password is required` });
    }
    if (!answer) {
      return res.send({ message: `Answer is required` });
    }
    //existinguser
    const existinguser = await userModel.findOne({ email });
    if (existinguser) {
      res.status(500).send({
        success: false,
        message: `Already registered please log in`,
      });
    }
    const hashedPassword = await hashPassword(password);
    const user = new userModel({
      name,
      email,
      password: hashedPassword,
      answer,
    }).save();

    res.status(201).send({
      success: true,
      message: `user registered sucessfully`,
      user,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      meessage: `error in registeration`,
      error,
    });
  }
};
export const loginController = async (req, res) => {
  try {
    const { email, password } = req.body;
    console.log(req.body);

    if (!email || !password) {
      res.status(404).send({
        success: false,
        message: `Invalid email or password`,
      });
    }
    const user = await userModel.findOne({ email });
    if (!user) {
      res.status(404).send({
        success: false,
        message: `Email is not registered`,
      });
    }
    const match = await comparePassword(password, user.password);
    if (!match) {
      res.status(200).send({
        success: false,
        message: `Invalid password`,
      });
    }

    //token
    const token = JWT.sign({ _id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "7d",
    });
    res.status(200).send({
      success: true,
      message: `Login Sucessfully`,
      user: {
        name: user.name,
        email: user.email,
        role: user.role,
      },
      token,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: `error in Login `,
      error,
    });
  }
};
export const forgetPasswordController = async (req, res) => {
  try {
    const { email, answer, newpassword } = req.body;
    console.log(req.body)
    if (!email) {
      return res.send({ message: `email is required` });
    }
    if (!answer) {
      return res.send({ message: `answer is required` });
    }
    if (!newpassword) {
      return res.send({ message: `Password is required` });
    }
    //
    const user = await userModel.findOne({ email, answer });

    if (!user) {
      return res
        .status(404)
        .send({ success: false, message: "Wrong email or password" });
    }
    const hashed = await hashPassword(newpassword);
    await userModel.findByIdAndUpdate(user._id, { password: hashed });
    res.status(200).send({
      success: true,
      message: "password reset Sucessfully",
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Something went wrong",
      error,
    });
  }
};
export const testController = (req, res) => {
  res.send(`protected route`);
};
