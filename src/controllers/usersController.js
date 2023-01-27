const usersService = require('../services/usersService');

const getAll = async (_req, res) => {
  const allUsers = await usersService.getAll();
  return res.status(200).send(allUsers);
};

const getById = async (req, res) => {
  const { id } = req.params;
  const user = await usersService.getById(id);
  if (user.type) return res.status(404).json({ message: user.message });
  res.status(200).json(user);
};

const insertNew = async (req, res) => {
  const { body } = req;
  const newUser = await usersService.insertNew(body);
  if (newUser.type) return res.status(409).json({ message: newUser.message });
  res.status(201).send(newUser);
};

module.exports = {
  getAll,
  getById,
  insertNew,
};