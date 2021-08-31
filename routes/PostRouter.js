import express from "express";
import jwt from "express-jwt";
import dotenv from "dotenv";
dotenv.config();
import PostController from "../controllers/PostController.js";

const Router = express.Router();

// CRUD
Router.get(
  "/",
  jwt({ secret: process.env.SECRET_KEY, algorithms: ["HS256"] }),
  PostController.getAll
);
Router.get("/:id", PostController.getOne);
Router.post("/", PostController.create);
Router.put("/", PostController.update);
Router.delete("/:id", PostController.delete);

export default Router;
