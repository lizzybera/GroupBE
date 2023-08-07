import express, { Request, Response } from "express"
import taskModel from "../model/taskModel"

export const createTask = async (req : Request, res : Response) =>{
    try {
        const {task} = req.body

        const tasked = await taskModel.create(task)

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

        const {id} = req.params
        const tasked = await taskModel.findByIdAndDelete(id)

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