"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.viewUser = exports.signinUser = exports.registerUser = void 0;
const bcrypt_1 = __importDefault(require("bcrypt"));
const cloudinary_1 = __importDefault(require("../config/cloudinary"));
const authModel_1 = __importDefault(require("../model/authModel"));
const registerUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { name, email, password } = req.body;
        const salt = yield bcrypt_1.default.genSalt(10);
        const hashed = yield bcrypt_1.default.hash(password, salt);
        if (!req.file || !req.file.path) {
            res.status(400).json({
                message: "no file uploaded",
            });
        }
        const { secure_url, public_id } = yield cloudinary_1.default.uploader.upload(req === null || req === void 0 ? void 0 : req.file.path);
        const user = yield authModel_1.default.create({
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
    }
    catch (error) {
        res.status(400).json({
            message: "Error occured while registering user",
            data: error,
        });
    }
});
exports.registerUser = registerUser;
const signinUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email, password } = req.body;
        const user = yield authModel_1.default.findOne({ email });
        if (user) {
            const checkPassword = yield bcrypt_1.default.compare(password, user === null || user === void 0 ? void 0 : user.password);
            if (checkPassword) {
                return res.status(201).json({
                    message: "user sign in",
                    data: user._id,
                });
            }
            else {
                res.status(404).json({ message: "password not correct" });
            }
        }
        else {
            res.status(404).json({ message: "user not found" });
        }
    }
    catch (error) {
        res.status(404).json({
            message: "Error while Signing User In",
        });
    }
});
exports.signinUser = signinUser;
const viewUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const users = yield authModel_1.default.find();
        res.status(200).json({
            message: "viewing users",
            data: users
        });
    }
    catch (error) {
        res.status(404).json({
            message: "cannot view users"
        });
    }
});
exports.viewUser = viewUser;
