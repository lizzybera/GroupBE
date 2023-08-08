"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.mainApp = void 0;
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const authRoute_1 = __importDefault(require("./router/authRoute"));
const taskRouter_1 = __importDefault(require("./router/taskRouter"));
const mainApp = (app) => {
    app.use(express_1.default.json());
    app.use((0, cors_1.default)());
    app.get("/", (req, res) => {
        return res.status(200).json({
            message: "Viewing Api"
        });
    });
    app.use("/api/v1", authRoute_1.default);
    app.use("/api/v1", taskRouter_1.default);
};
exports.mainApp = mainApp;
