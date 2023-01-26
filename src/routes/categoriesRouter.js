const express = require('express');
const categoriesController = require('../controllers/categoriesController');

const categoriesRouter = express.Router();

categoriesRouter.get('/', categoriesController.getAll);
categoriesRouter.post('/', categoriesController.insertNew);

module.exports = categoriesRouter;