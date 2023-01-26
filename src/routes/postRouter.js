const express = require('express');
const postController = require('../controllers/postController');

const postRouter = express.Router();

postRouter.post('/', postController.newPost);

module.exports = postRouter;