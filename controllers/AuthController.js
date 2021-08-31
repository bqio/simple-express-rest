import AuthService from "../services/AuthService.js";

class AuthController {
  async signUp(req, res) {
    try {
      const user = await AuthService.signUp(req.body);
      res.json(user);
    } catch (e) {
      res.json({ error: e.message });
    }
  }

  async signIn(req, res) {}
}

export default new AuthController();
