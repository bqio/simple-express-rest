import express from "express";
import AuthController from "../controllers/AuthController.js";

const Router = express.Router();

Router.post("/signup", AuthController.signUp);
Router.post("/signin", AuthController.signIn);

export default Router;
