const express = require('express');
const usersController = require('../controllers/usersController');
const inputsValidation = require('../middlewares/userMiddleware');
const tokenValidation = require('../middlewares/tokenMiddleware');

const userRouter = express.Router();

userRouter.get('/', tokenValidation, usersController.getAll);
userRouter.get('/:id', tokenValidation, usersController.getById);
userRouter.post('/', inputsValidation, usersController.insertNew);

module.exports = userRouter;