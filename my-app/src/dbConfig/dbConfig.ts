import mongoose from "mongoose";

export async function connectDB() {
  try {
    const conn = await mongoose.connect(process.env.MONGODB_URL!);
    console.log("Connected to MongoDB", conn.connection.host);
    conn.connection.on("connected", () => {
      console.log("MongoDB connected successfully");
    });
    conn.connection.on("error", (error) => {
      console.log("MongoDB connection error", error);
      process.exit(1);
    });
    conn.connection.on("disconnected", () => {
      console.log("MongoDB disconnected");
      process.exit(1);
    });
  } catch (error) {
    console.log("Error connecting to MongoDB", error);
    console.log(error);
    process.exit(1);
  }
}
