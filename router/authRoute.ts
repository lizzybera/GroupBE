import express from "express";
import { registerUser, signinUser, viewUser } from "../controller/authController";
import upload from "../config/multer";

const router = express.Router();
router.route("/register-user").post(upload, registerUser);
router.route("/signin").post(signinUser);
router.route("/users").get(viewUser);

export default router;