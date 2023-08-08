import mongoose from "mongoose";
import env from "dotenv";
env.config()

// const URL: string = "mongodb://127.0.0.1:27017/Group";
// const URL: string = "mongodb://localhost:27017/Group"
const URL: string = process.env.DB_STRING!

const db = () => {
  mongoose.connect(URL).then(() => {
    console.log("connected");
  });
};

export default db;
