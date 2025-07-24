import mongoose from "mongoose";

import Author from "./Models/Author.mongodb.js";
import Post from "./Models/Post.mongodb.js";
import databaseConnect from './Database/connection.js';


(async () => {

    databaseConnect();
    // Let's fetch Data
    // const postData = await Post.find().populate('author', 'name');
    // console.log(postData);
    
    const findAuthor = await Author.find({name: 'kuch bhi'}).explain('executionStats');
    console.log(JSON.stringify(findAuthor, null, 2));
    // await Author.deleteMany({});

    // try {
    //     const author = await Author.create({
    //         name: "Kuch bhi",
    //         email: "Kuchbhi@blog.com"
    //     });
    //     console.log(`Author: ${author}`);
    //     const post = await Post.create({
    //         title: "First Blog Post",
    //         content: "This is the blog content",
    //         tags: ["mongodb", "schema"],
    //         author: author._id
    //     });
    //     console.log(`Posts: ${post}`);


    // } catch (error) {
    //     console.log(`Getting error while adding data :`, error);
    // }

    // console.log("Data seeded ✅");

})();