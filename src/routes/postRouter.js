const express = require('express');
const postController = require('../controllers/postController');
const tokenValidation = require('../middlewares/tokenMiddleware');

const postRouter = express.Router();

postRouter.post('/', postController.newPost);
postRouter.get('/', tokenValidation, postController.getAll);
postRouter.post('/:id', postController.getById);

module.exports = postRouter;