import mongoose from "mongoose";

const connectDb = async () => {
  try {
    const db_url = process.env.DB_URL;
    await mongoose.connect(db_url);
    console.log("Database connected");
  } catch (error) {
    console.error(error.message);
    process.exit(1);
  }
};

export default connectDb;
