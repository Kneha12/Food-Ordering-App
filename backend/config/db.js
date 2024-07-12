import mongoose from "mongoose";
export const connectDB=async()=>{
    await mongoose.connect('mongodb+srv://neha05:Neha121102@cluster0.puqmypz.mongodb.net/food-del').then(()=>console.log("DB Connected"));
}