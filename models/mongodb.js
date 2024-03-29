import mongoose from "mongoose";

const ConnectDB = async () => {
    try {
        await mongoose.connect("mongodb://127.0.0.1:27017/Authentication")
        console.log("MongoDB connected");
    } catch (error) {
        console.log("MongoDB error:", error);
    }
};

export default ConnectDB;
