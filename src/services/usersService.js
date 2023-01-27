const jwt = require('jsonwebtoken');
const { User } = require('../models');

const secret = process.env.JWT_SECRET || 'secretJWT';

const getAll = async () => {
  const users = await User.findAll({
    attributes: { exclude: ['password'] },
  });

  return users;
};

const getById = async (id) => {
  const user = await User.findByPk(id, {
    attributes: { exclude: ['password'] },
  });
  if (!user) return { type: 'INVALID_ID', message: 'User does not exist' };
  return user;
};

const insertNew = async (user) => {
  const { email } = user;
  const getUserByEmail = await User.findOne({ where: { email } });
  if (getUserByEmail) return { type: 'INVALID_EMAIL', message: 'User already registered' };
  await User.create(user);

  const jwtConfig = {
    expiresIn: '7d',
    algorithm: 'HS256',
  };

  const token = jwt.sign({ data: { userId: user.id } }, secret, jwtConfig);

  return { token };
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