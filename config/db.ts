import mongoose from "mongoose";

const URL: string = "mongodb://localhost:27017/Group"

export const db = () =>{
    mongoose.connect(URL).then(()=>{
        console.log("connected");
        
    })
}