const jwt = require('jsonwebtoken');

require('dotenv/config');
const usersService = require('../services/usersService');

const secret = process.env.JWT_SECRET || 'seusecretdetoken';

const tokenValidation = async (req, res, next) => {
  const token = req.header('Authorization');
  if (!token) {
    return res.status(401).json({ error: 'Token not found' });
  }

  const decoded = jwt.verify(token, secret);
  const { userId } = decoded.data;
  const user = await usersService.getById(userId);

  if (!user) {
    return res.status(401).json({ message: 'Expired or invalid token' });
  }
  req.user = user;
  next();
};

module.exports = tokenValidation;