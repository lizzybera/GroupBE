import express, { Application, Request, Response } from "express";
import cors from "cors";


export const mainApp = (app: Application) => {
    app.use(express.json())
    app.use(cors())
    app.get("/", (req: Request, res: Response) => {
        return res.status(200).json({
            message : "Viewing Api"
        })
    })

}