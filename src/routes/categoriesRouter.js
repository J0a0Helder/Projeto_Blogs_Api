const express = require('express');
const categoriesController = require('../controllers/categoriesController');
const tokenValidation = require('../middlewares/tokenMiddleware');

const categoriesRouter = express.Router();

categoriesRouter.get('/', tokenValidation, categoriesController.getAll);
categoriesRouter.post('/', categoriesController.insertNew);

module.exports = categoriesRouter;