import express from "express";
import { registerUser, signinUser } from "../controller/authController";

const router = express.Router()
router.route("/register-user").post(registerUser)
router.route("/signin").post(signinUser)

export default router;