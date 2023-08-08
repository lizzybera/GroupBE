import mongoose from "mongoose";

interface iTask {
    taskName? : string;
    user? : {}
}

interface iTaskData extends iTask, mongoose.Document{}

const taskModel = new mongoose.Schema({
    taskName : {
        type : String,
      },
    user : {
        type : mongoose.Types.ObjectId,
        ref : "users"
    }
}, {
    timestamps: true,
  })

export default mongoose.model<iTaskData>("tasks", taskModel)