const jwt = require('jsonwebtoken');
const usersService = require('./usersService');

const secret = process.env.JWT_SECRET || 'secretJWT';
const isBodyValid = (username, password) => username && password;

const newLogin = async (email, password) => {
  if (!isBodyValid(email, password)) {
    return { type: 'MISSING_FIELDS', message: 'Some required fields are missing' };
  }
  
  const user = await usersService.getUserByEmail(email);
  
  if (!user || user.password !== password) {
    return { type: 'INVALID_FIELDS', message: 'Invalid fields' }; 
  }

  const jwtConfig = {
    expiresIn: '7d',
    algorithm: 'HS256',
  };

  const token = jwt.sign({ data: { userId: user.id } }, secret, jwtConfig);

  return { token };
};

module.exports = {
  newLogin,
};