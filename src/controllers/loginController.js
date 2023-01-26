const loginService = require('../services/loginService');

const newLogin = async (_req, res) => {
  const login = await loginService.newLogin();
  res.status(201).send(login);
};

module.exports = {
  newLogin,
};