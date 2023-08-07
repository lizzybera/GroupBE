import express, { Router } from "express"
import { createTask, deleteTask, updateTask, viewTask } from "../controller/taskController"

const router = Router()

router.route("/").get(viewTask)
router.route("/create").post(createTask)
router.route("/delete").delete(deleteTask)
router.route("/update").patch(updateTask)