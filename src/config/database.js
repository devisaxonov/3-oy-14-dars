import mongoose from "mongoose";

const connectDb = async () => {
  try {
    await mongoose.connect(process.env.DB_URL);
    console.log("Databasega ulandi");
  } catch (error) {
    console.error(error.message);
    process.exit(1);
  }
};

export default connectDb;
