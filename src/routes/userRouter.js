const express = require('express');
const usersController = require('../controllers/usersController');
const inputsValidation = require('../middlewares/userMiddleware');
const tokenValidation = require('../middlewares/tokenMiddleware');

const userRouter = express.Router();

userRouter.get('/', tokenValidation, usersController.getAll);
userRouter.get('/:id', usersController.getById);
userRouter.post('/', inputsValidation, usersController.insertNew);
// userRouter.delete('/me', usersController.deleteP);

module.exports = userRouter;