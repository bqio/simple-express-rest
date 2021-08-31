import User from "../models/User.js";
import dotenv from "dotenv";
dotenv.config();
import jwt from "jsonwebtoken";

class AuthService {
  async signUp(user) {
    const newUser = await User.create(user);
    return {
      code: 200,
      token: jwt.sign({ id: newUser._id }, process.env.SECRET_KEY),
    };
  }

  async signIn(username, password) {}
}

export default new AuthService();
