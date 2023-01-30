const express = require('express');
const categoriesController = require('../controllers/categoriesController');
const tokenValidation = require('../middlewares/tokenMiddleware');

const categoriesRouter = express.Router();

categoriesRouter.get('/', tokenValidation, categoriesController.getAll);
categoriesRouter.post('/', tokenValidation, categoriesController.insertNew);

module.exports = categoriesRouter;