"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const mainApp_1 = require("./mainApp");
const db_1 = __importDefault(require("./config/db"));
dotenv_1.default.config();
const app = (0, express_1.default)();
// const port: number = 3200;
const port = parseInt(process.env.APPLICATION_PORT);
(0, mainApp_1.mainApp)(app);
const Server = app.listen(process.env.PORT || port, () => {
    (0, db_1.default)();
    console.log(port);
});
process.on("uncaughtException", (error) => {
    console.log("");
    console.log("Server is shutting down due to uncaught exception", error);
    process.exit(1);
});
process.on("unhandledRejection", (reason) => {
    console.log("");
    console.log("Server is shutting down due to unhandeled rejection", reason);
    Server.close(() => {
        process.exit(1);
    });
});
