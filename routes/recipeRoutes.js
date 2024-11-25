const express = require('express');
const recipeController = require('../controllers/recipeController');

const recipeRouter = express.Router();

recipeRouter.get('/', recipeController.getAllRecipes);
recipeRouter.get('/:id', recipeController.getRecipeByID);
recipeRouter.post('/', recipeController.createRecipe);
recipeRouter.put('/:id', recipeController.updateRecipe);
recipeRouter.delete('/:id', recipeController.deleteRecipe);

module.exports = recipeRouter;
