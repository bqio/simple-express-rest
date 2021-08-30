import dotenv from "dotenv";
dotenv.config();
import express from "express";
import mongoose from "mongoose";
import PostRouter from "./routes/PostRouter.js";

const app = express();
const DB_URL = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.xqinu.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;

// Middlewares
app.use(express.json());

// Routes
app.use("/api/posts", PostRouter);

async function start() {
  try {
    await mongoose.connect(DB_URL);
    app.listen(process.env.PORT, () => console.log("Server started."));
  } catch (error) {
    console.log(error);
  }
}

start();
