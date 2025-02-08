const PostSchema = require("../models/post.js");

const getPosts = async (req, res) => {
  try {
    const getPosts = await PostSchema.findById();

    res.status(200).json(getPosts);

  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const createPost = async (req, res) => {
  try {
    const getPosts = await PostSchema.findById();

    res.status(200).json(getPosts);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const updatePost = async (req, res) => {
  try {
    const getPosts = await PostSchema.findById();

    res.status(200).json(getPosts);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const deletePost = async (req, res) => {
  try {
    const getPosts = await PostSchema.findById();
    
    res.status(200).json(getPosts);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
