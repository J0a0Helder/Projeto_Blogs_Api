const postService = require('../services/postService');

// const newPost = async (_req, res) => {
//   const post = await postService.insertNew();
//   res.status(201).send(post);
// };

const getAll = async (_req, res) => {
  const allPosts = await postService.getAll();
  return res.status(200).send(allPosts);
};

const getById = async (req, res) => {
  const { id } = req.params;
  const post = await postService.getById(id);
  if (post.type) return res.status(404).json({ message: post.message });
  res.status(200).json(post);
};

const search = async (req, res) => {
  const allPosts = await postService.getAll();
  const filters = Object.values(req.query)[0].toLowerCase();
  const posts = await postService.search(filters);
  if (posts.type) return res.status(200).json(allPosts);
  return res.status(200).send(posts);
};

module.exports = {
  // newPost,
  getAll,
  getById,
  search,
};