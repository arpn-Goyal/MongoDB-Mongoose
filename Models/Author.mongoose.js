import mongoose from "mongoose";

const authorSchema = mongoose.Schema({
    name:String,
    email: {type: String, required: true, unique: true}
})



