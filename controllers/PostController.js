import PostService from "../services/PostService.js";

class PostController {
  async getAll(_, res) {
    try {
      const posts = await PostService.getAll();
      res.json(posts);
    } catch (e) {
      res.json({ error: e.message });
    }
  }
  async getOne(req, res) {
    try {
      const id = req.params.id;
      const post = await PostService.getOne(id);
      res.json(post);
    } catch (e) {
      res.json({ error: e.message });
    }
  }
  async create(req, res) {
    try {
      const post = await PostService.create(req.body);
      res.json(post);
    } catch (e) {
      res.json({ error: e.message });
    }
  }
  async update(req, res) {
    try {
      const post = await PostService.update(req.body);
      res.json(post);
    } catch (e) {
      res.json({ error: e.message });
    }
  }
  async delete(req, res) {
    try {
      const id = req.params.id;
      const post = await PostService.delete(id);
      res.json(post);
    } catch (e) {
      res.json({ error: e.message });
    }
  }
}

export default new PostController();
