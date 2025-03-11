import express, { json } from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import { bookRouter } from "./routs/bookRouter.mjs";

dotenv.config();
const port = process.env.PORT || 3000;
const dbUrl = process.env.MONGO_URL;
if (!dbUrl) throw Error("No MONGO_URL in env file");

const app = express();
app.use(json());
app.use("/books", bookRouter);

app.get("/ping", (_, res) => {
  res.status(200).json({ status: "Welcome to my Bookstore" });
});

app.listen(port, async () => {
  try {
    await mongoose.connect(dbUrl);
    console.log("MongoDB connection state:", mongoose.connection.readyState);
    console.log("Api is running");
  } catch (error) {
    console.error("Error", error);
  }
});
