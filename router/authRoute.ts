import express from "express";
import { registerUser } from "../controller/authController";

const router = express.Router()
router.route("/register-user").post(registerUser)

export default router;