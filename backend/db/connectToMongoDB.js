import mongoose from "mongoose";

const connectToMongoDB = async() => {
    try {
        await mongoose.connect(process.env.MONGO_DB_URL);
        console.log("Database connected");

    } catch (error) {
        console.log("Error connecting to Mongo DB", error.messsage);
    }
}

export default connectToMongoDB;