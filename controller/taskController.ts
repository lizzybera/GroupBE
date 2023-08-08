import express, { Request, Response } from "express"
import taskModel from "../model/taskModel"
import authModel from "../model/authModel"
import mongoose from "mongoose"

export const createTask = async (req : Request, res : Response) =>{
    try {
        const {authID} = req.params;
        const {taskName} = req.body

        const user: any = await authModel.findById(authID)

        const tasked: any = await taskModel.create({taskName, user : user})

        user?.task?.push( new mongoose.Types.ObjectId(tasked._id!) )
        user?.save()
        console.log(user);

        res.status(201).json({
            message : "task created sucessfully",
            data : tasked
        })

        
    } catch (error) {
        res.status(404).json({
            message : "error creating Task"
        })
    }
}

export const viewTask = async (req : Request, res : Response) =>{
    try {

        const tasked = await taskModel.find()

        res.status(200).json({
            message : "task viewed sucessfully",
            data : tasked
        })
    } catch (error) {
        res.status(404).json({
            message : "error viewing Task"
        })
    }
}

export const deleteTask = async (req : Request, res : Response) =>{
    try {

        const {authID, id} = req.params
        const user: any = await authModel.findById(authID)
        const tasked : any = await taskModel.findByIdAndDelete(id)

        // const tasked: any = await taskModel.create({taskName, user : user})

        user?.task?.pull( new mongoose.Types.ObjectId(tasked._id!) )
        user?.save()
        console.log(user);


        res.status(201).json({
            message : "task deleted sucessfully",
            data : tasked
        })
    } catch (error) {
        res.status(404).json({
            message : "error deleting Task"
        })
    }
}

export const updateTask = async (req : Request, res : Response) =>{
    try {

        const {id} = req.params
        const {task} = req.body

        const tasked = await taskModel.findByIdAndUpdate(id, {task}, {new : true})

        res.status(201).json({
            message : "task updated sucessfully",
            data : tasked
        })
    } catch (error) {
        res.status(404).json({
            message : "error updating Task"
        })
    }
}