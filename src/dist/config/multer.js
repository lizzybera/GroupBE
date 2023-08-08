"use strict";
// import multer from "multer";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// const storage = multer.diskStorage({
//   destination: function (req: any, file: any, cb: any) {
//     cb(null, "upload");
//   },
//   filename: function (req: any, file: any, cb: any) {
//     const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
//     cb(null, file.fieldname + "-" + uniqueSuffix + ".jpg");
//   },
// });
// const upload = multer({ storage: storage }).single("image");
// export default upload;
const multer_1 = __importDefault(require("multer"));
const storage = multer_1.default.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "upload");
    },
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
        cb(null, file.fieldname + "-" + uniqueSuffix + ".jpg");
    }
});
const upload = (0, multer_1.default)({ storage: storage }).single("avatar");
exports.default = upload;
