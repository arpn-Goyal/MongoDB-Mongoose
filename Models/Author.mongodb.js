import mongoose from "mongoose";

const authorSchema = new mongoose.Schema({
    name: String,
    email: {type: String, required: true, unique: true}
}, { timestamps: true })

authorSchema.index({name: 1})
const Author = mongoose.model('Author', authorSchema);

export default Author;

    
