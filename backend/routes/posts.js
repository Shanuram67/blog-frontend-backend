const express = require("express");
const fs = require("fs");
const path = require("path");

const router = express.Router();
const filePath = path.join(__dirname, "../data/posts.json");

// Utility to read data from JSON file
const readPosts = () => {
  if (!fs.existsSync(filePath)) return [];
  const data = fs.readFileSync(filePath);
  return JSON.parse(data);
};

// Utility to write data to JSON file
const writePosts = (data) => {
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
};

// GET /api/posts - List all posts
router.get("/", (req, res) => {
  const posts = readPosts();
  console.log("Fetching all posts:", posts);
  res.status(200).json(posts);
});

// POST /api/posts - Create a new post
router.post("/", (req, res) => {
  const { title, content } = req.body;

  if (!title || !content) {
    return res.status(400).json({ message: "Title and content are required" });
  }

  const posts = readPosts();
  const newPost = {
    id: posts.length + 1,
    title,
    content,
    createdAt: new Date().toISOString(),
  };

  posts.push(newPost);
  writePosts(posts);
  console.log("Post created:", newPost);
  res.status(201).json(newPost);
});

// GET /api/posts/:id - Get a single post
router.get("/:id", (req, res) => {
  const posts = readPosts();
  const post = posts.find((p) => p.id === parseInt(req.params.id));

  if (!post) {
    return res.status(404).json({ message: "Post not found" });
  }

  console.log("Fetching post:", post);
  res.status(200).json(post);
});

module.exports = router;
