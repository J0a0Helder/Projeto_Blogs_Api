const loginService = require('../services/loginService');

const newLogin = async (req, res) => {
  const { email, password } = req.body;
  const login = await loginService.newLogin(email, password);
  if (login.type) return res.status(400).json({ message: login.message });
  res.status(200).send(login);
};

module.exports = {
  newLogin,
};