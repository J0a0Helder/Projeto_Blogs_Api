const usersService = require('../services/usersService');

const getAll = async (_req, res) => {
  const allUsers = await usersService.getAll();
  return res.status(200).send(allUsers);
};

const getById = async (req, res) => {
  const { id } = req.params;
  const user = await usersService.getById(id);
  res.status(200).json(user);
};

const insertNew = async (req, res) => {
  const newUser = await usersService.insertNew();
  res.status(201).send(newUser);
};

module.exports = {
  getAll,
  getById,
  insertNew,
};