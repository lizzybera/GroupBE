import mongoose from "mongoose";

const URL: string = "mongodb://127.0.0.1:27017/Group";

 const db = () => {
  mongoose.connect(URL).then(() => {
    console.log("connected");
  });
};

export default db