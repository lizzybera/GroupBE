import mongoose from "mongoose";

interface iAuth {
  email?: string;
  name?: string;
  password?: string;
  avatar?: string;
  avatarID?: string;
  task? : {} []
}

const authModel = new mongoose.Schema(
  {
    name: { type: String },
    email: { type: String, unique: true, toLowerCase: true },
    password: { type: String },
    avatar: { type: String },
    avatarID: { type: String},
    task: [
      {
      type : mongoose.Types.ObjectId,
      ref : "tasks"
    },
  ],
  },
  {
    timestamps: true,
  }
);

export default mongoose.model<iAuth>("auths", authModel);
