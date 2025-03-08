import express, { json } from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config();

const app = express();
app.use(json());

app.get("/ping", (_, res) => {
  res.status(200).json({ status: "Welcome to my Bookstore" });
});

app.listen(3000, (error) => {
  console.log("API is running");
  if (error) {
    console.error(error);
  }
});
