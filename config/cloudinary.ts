import { v2 as cloudinary } from "cloudinary";
import env from "dotenv";
env.config()


cloudinary.config({
    cloud_name: process.env.APPLICATION_NAME,
    api_key: process.env.APPLICATION_KEY,
    api_secret: process.env.APPLICATION_SECRET,
})

export default cloudinary;