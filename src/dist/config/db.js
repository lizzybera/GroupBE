"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
// const URL: string = "mongodb://127.0.0.1:27017/Group";
// const URL: string = "mongodb://localhost:27017/Group"
const URL = process.env.DB;
const db = () => {
    mongoose_1.default.connect(URL).then(() => {
        console.log("connected");
    });
};
exports.default = db;
