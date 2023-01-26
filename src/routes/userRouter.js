const express = require('express');
const usersController = require('../controllers/usersController');

const userRouter = express.Router();

userRouter.get('/', usersController.getAll);
userRouter.get('/:id', usersController.getById);
userRouter.post('/', usersController.insertNew);
// userRouter.delete('/me', usersController.deleteP);

module.exports = userRouter;