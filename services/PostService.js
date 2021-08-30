import Post from "../models/Post.js";

class PostService {
  async getAll() {
    const posts = await Post.find();
    return posts;
  }

  async getOne(id) {
    const post = await Post.findById(id);
    return post;
  }

  async create(post) {
    const newPost = await Post.create(post);
    return newPost;
  }

  async update(post) {
    const updatedPost = await Post.findByIdAndUpdate(post._id, post, {
      new: true,
    });
    return updatedPost;
  }

  async delete(id) {
    const post = await Post.findByIdAndDelete(id);
    return post;
  }
}

export default new PostService();
