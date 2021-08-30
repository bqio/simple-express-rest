import express from "express";
import PostController from "../controllers/PostController.js";

const Router = express.Router();

// CRUD
Router.get("/", PostController.getAll);
Router.get("/:id", PostController.getOne);
Router.post("/", PostController.create);
Router.put("/", PostController.update);
Router.delete("/:id", PostController.delete);

export default Router;
