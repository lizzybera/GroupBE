import { Request, Response } from "express";
import bcrypt from "bcrypt";
import cloudinary from "../config/cloudinary";
import authModel from "../model/authModel";

export const registerUser = async (req: any, res: Response) => {
  try {
    const { name, email, password } = req.body;
    const salt = await bcrypt.genSalt(10);
    const hashed = await bcrypt.hash(password, salt);

    const { secure_url, public_id } = await cloudinary.uploader.upload(
      req?.file.path
    );

    const user = await authModel.create({
      name,
      email,
      password: hashed,
      avatar: secure_url,
      avatarID: public_id,
    });

    res.status(201).json({
      message: "User registered successfully",
      data: user,
    });
  } catch (error) {
    res.status(404).json({
      message: "Error occured while registering user",
      data: error.message,
    });
  }
};



export const signinUser = async (req: any, res: Response) => {
    try {
      const { email, password } = req.body;
  
      const user = await authModel.findOne({ email });
  
      if (user) {
        const checkPassword = await bcrypt.compare(password, user?.password!);
  
        if (checkPassword) {
          return res.status(201).json({
            message: "user sign in",
            data: user._id,
          });
        } else {
          res.status(404).json({ message: "password not correct" });
        }
      } else {
        res.status(404).json({ message: "user not found" });
      }
    } catch (error) {
      res.status(404).json({
        message: "Error while Signing User In",
      });
    }
  };