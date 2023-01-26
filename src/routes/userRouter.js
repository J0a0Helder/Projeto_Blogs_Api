const express = require('express');
const usersController = require('../controllers/usersController');
const inputsValidation = require('../middlewares/userMiddleware');

const userRouter = express.Router();

userRouter.get('/', usersController.getAll);
userRouter.get('/:id', usersController.getById);
userRouter.post('/', inputsValidation, usersController.insertNew);
// userRouter.delete('/me', usersController.deleteP);

module.exports = userRouter;