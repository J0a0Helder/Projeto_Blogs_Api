const { Category } = require('../models');

const getAll = async () => {
  const categories = await Category.findAll();

  return categories;
};

const insertNew = async (name) => {
  if (!name) return { type: 'MISSING_FIELDS', message: '"name" is required' };
  const newCategory = await Category.create({ name });
  return newCategory;
};

module.exports = {
  getAll,
  insertNew,
};