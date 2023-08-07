import express, {Application, Request, Response} from "express";
// import env from "dotenv";
// import { dbNot } from "./config/dbNot";
import { mainApp } from "./mainApp";
<<<<<<< HEAD
import  db  from "./config/db";
=======
import { db } from "./config/db";
>>>>>>> 6d425648566d65e29dc308641332902e0735fa73
// env.config()

const app = express();
const port: number = 3200;
// const port: number = parseInt(process.env.APPLICATION_PORT!);

mainApp(app)
const Server = app.listen(port, () => {
    db()
    console.log("Connected to Port", port)
    db()
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