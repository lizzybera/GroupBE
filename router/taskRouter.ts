import express, { Router } from "express"
import { createTask, deleteTask, updateTask, viewTask } from "../controller/taskController"

const router = Router()

router.route("/view").get(viewTask)
router.route("/:authID/create").post(createTask)
router.route("/:authID/:id/delete").delete(deleteTask)
router.route("/:id/update").patch(updateTask)

export default router