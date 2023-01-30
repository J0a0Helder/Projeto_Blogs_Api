const categoriesService = require('../services/categoriesService');

const getAll = async (_req, res) => {
  const categories = await categoriesService.getAll();
  res.status(200).json(categories);
};

// const insertNew = async (_req, res) => {
//   const newProduct = await categoriesService.insertNew();
//   res.status(201).send(newProduct);
// };

module.exports = {
  getAll,
  // insertNew,
};