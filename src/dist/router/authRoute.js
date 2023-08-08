"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const authController_1 = require("../controller/authController");
const multer_1 = __importDefault(require("../config/multer"));
const router = express_1.default.Router();
router.route("/register-user").post(multer_1.default, authController_1.registerUser);
router.route("/signin").post(authController_1.signinUser);
router.route("/users").get(authController_1.viewUser);
exports.default = router;
