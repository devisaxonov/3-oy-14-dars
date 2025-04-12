import express from "express";
import "dotenv/config";
import connectDb from "./config/database.js";
import Routes from "./routers/routes.js";

const app = express();

app.use(express.json());
app.use("/api", Routes());

const PORT = process.env.PORT;

const initApp = async () => {
  try {
    await connectDb();
    app.listen(PORT, () => {
      console.log("Server is running port", PORT);
    });
  } catch (error) {
    console.error(error.message);
    app.close();
  }
};

initApp();
