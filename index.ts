import express, {Application, Request, Response} from "express";
// import env from "dotenv";
// import { dbNot } from "./config/dbNot";
import { mainApp } from "./mainApp";
import  db  from "./config/db";
// env.config()

const app = express();
const port: number = 3200;
// const port: number = parseInt(process.env.APPLICATION_PORT!);

mainApp(app)
const Server = app.listen(port, () => {
    db()
    console.log("Connected to Port", port)
})

process.on("uncaughtException", (error) => {
    console.log("")
    console.log("Server is shutting down due to uncaught exception", error)

    process.exit(1);
})


process.on("unhandledRejection", (reason) => {
    console.log("")
    console.log("Server is shutting down due to unhandeled rejection", reason)

    Server.close(() => {
        process.exit(1)
    })
})