const postService = require('../services/postService');

const newPost = async (_req, res) => {
  const post = await postService.insertNew();
  res.status(201).send(post);
};

module.exports = {
  newPost,
};