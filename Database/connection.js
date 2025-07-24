import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const databaseConnect = () => {
    mongoose.connect(process.env.MONGO_URI)
        .then(() => {
            console.log("MongoDB Connected");
        })
        .catch((err) => {
            console.log(`Error in MongoDb connection: ${err}`);
        });
};

export default databaseConnect;
