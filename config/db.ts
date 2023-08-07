import mongoose from "mongoose";

<<<<<<< HEAD
const URL: string = "mongodb://127.0.0.1:27017/Group";
=======
const URL: string = "mongodb://localhost:27017/Group"
>>>>>>> 6d425648566d65e29dc308641332902e0735fa73

const db = () => {
  mongoose.connect(URL).then(() => {
    console.log("connected");
  });
};

export default db;
