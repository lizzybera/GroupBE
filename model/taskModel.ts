import mongoose from "mongoose";

interface iTask {
    task? : string;
}

interface iTaskData extends iTask, mongoose.Document{}

const taskModel = new mongoose.Schema({
    task : {
        type : String
    }
})

export default mongoose.model<iTaskData>("tasks", taskModel)