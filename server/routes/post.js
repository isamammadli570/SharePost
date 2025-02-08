const express = require("express");
const { register, login } = require("../controllers/auth.js");

const router = express.Router();

router.get("/getPosts", getPosts);
router.post("/createPost", createPost);
router.patch("/updatePost/:id", updatePost);
router.delete("/deletePost/:id", deletePost);

module.exports = router;
