const categoriesService = require('../services/categoriesService');

const getAll = async (_req, res) => {
  const categories = await categoriesService.getAll();
  res.status(200).json(categories);
};

const insertNew = async (req, res) => {
  const { name } = req.body;
  const newCategory = await categoriesService.insertNew(name);
  if (newCategory.type) return res.status(400).json({ message: newCategory.message });
  res.status(201).send(newCategory);
};

module.exports = {
  getAll,
  insertNew,
};