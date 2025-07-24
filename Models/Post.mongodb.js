import mongoose from "mongoose";
// import Author from "./Author.mongodb.js";

const postSchema = new mongoose.Schema({
    title: {type: String, required: true},
    content: {type: String, required: true},
    tags: [String],
    author:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'Author',
        required: true
    }
}, { timestamps: true })


const Post = mongoose.model('Post', postSchema);

export default Post;

    
