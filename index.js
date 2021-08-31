import dotenv from "dotenv";
dotenv.config();
import express from "express";
import mongoose from "mongoose";

import PostRouter from "./routes/PostRouter.js";
import AuthRouter from "./routes/AuthRouter.js";

const app = express();
const DB_URL = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.xqinu.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;

app.use(express.json());

app.use("/api/posts", PostRouter);
app.use("/api/auth", AuthRouter);

app.use((err, req, res, next) => {
  if (err.name === "UnauthorizedError") {
    res.status(401).json({ message: "Invalid JWT.", code: 401 });
  }
});

async function start() {
  try {
    await mongoose.connect(DB_URL);
    app.listen(process.env.PORT, () => console.log("Server started."));
  } catch (error) {
    console.log(error);
  }
}

start();
