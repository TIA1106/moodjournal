import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
export const connectDB = async () => {
  if (mongoose.connection.readyState >= 1) return;

  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      dbName: "mood",
    });
    console.log("MongoDB Connected");
  } catch (err) {
    console.log("Mongo Error:", err);
  }
};
