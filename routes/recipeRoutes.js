const express = require('express');
const recipeController = require('../controllers/recipeController');

const recipeRouter = express.Router();

recipeRouter.get('/', recipeController.getAllRecipes); // GET all recipes
recipeRouter.get('/:id', recipeController.getRecipeByID); // GET recipe by ID
recipeRouter.post('/', recipeController.createRecipe); // POST create recipe
recipeRouter.put('/:id', recipeController.updateRecipe); // PUT update recipe
recipeRouter.delete('/:id', recipeController.deleteRecipe); // DELETE recipe

module.exports = recipeRouter;
