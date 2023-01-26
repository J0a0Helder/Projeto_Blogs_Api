const { User } = require('../models');

const getAll = async () => {
  const users = await User.findAll();

  return users;
};

const getById = async (id) => {
  const user = await User.findByPk(id);

  return user;
};

const insertNew = async () => {
  const newUser = await User.create();

  return newUser;
};

const getUserByEmail = async (email) => {
  const user = await User.findOne({ where: { email } });

  return user;
};

module.exports = {
  getAll,
  getById,
  insertNew,
  getUserByEmail,
};