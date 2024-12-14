const mongoose = require('mongoose');
const Recipe = require('../models/recipe');

const recipeController = {
    getAllRecipes: async (request, response) => {
        try {
            const recipes = await Recipe.find();
            response.status(200).json(recipes);
        } catch (error) {
            response.status(500).json({ message: error.message });
        }
    },
    getRecipeByID: async (request, response) => {
        try {
            const { id } = request.params;

            if (!mongoose.Types.ObjectId.isValid(id)) {
                return response.status(400).json({ message: 'Invalid recipe ID.' });
            }

            const recipe = await Recipe.findById(id);

            if (!recipe) {
                return response.status(404).json({ message: 'Recipe not found.' });
            }

            response.status(200).json(recipe);
        } catch (error) {
            response.status(500).json({ message: error.message });
        }
    },
    createRecipe: async (request, response) => {
        try {
            const { name, description, ingredients, instructions, cookingTime, servings } = request.body;

            if (!name || !description || !ingredients || !instructions || !cookingTime || !servings) {
                return response.status(400).json({ message: 'All fields are required.' });
            }

            const newRecipe = new Recipe({
                name,
                description,
                ingredients,
                instructions,
                cookingTime,
                servings
            });

            await newRecipe.save();
            response.status(201).json({ message: 'Recipe created successfully', recipe: newRecipe });
        } catch (error) {
            response.status(500).json({ message: error.message });
        }
    },
    updateRecipe: async (request, response) => {
        try {
            const { id } = request.params;
            const updates = request.body;

            if (!mongoose.Types.ObjectId.isValid(id)) {
                return response.status(400).json({ message: 'Invalid recipe ID.' });
            }

            if (!Object.keys(updates).length) {
                return response.status(400).json({ message: 'No fields provided to update.' });
            }

            const updatedRecipe = await Recipe.findByIdAndUpdate(
                id,
                { $set: updates },
                { new: true, runValidators: true }
            );

            if (!updatedRecipe) {
                return response.status(404).json({ message: 'Recipe not found.' });
            }

            response.status(200).json({ message: 'Recipe updated successfully', recipe: updatedRecipe });
        } catch (error) {
            response.status(500).json({ message: 'Failed to update recipe.', error: error.message });
        }
    },
    deleteRecipe: async (request, response) => {
        try {
            const { id } = request.params;

            if (!mongoose.Types.ObjectId.isValid(id)) {
                return response.status(400).json({ message: 'Invalid recipe ID.' });
            }

            const recipe = await Recipe.findByIdAndDelete(id);

            if (!recipe) {
                return response.status(404).json({ message: 'Recipe not found.' });
            }

            response.status(200).json({ message: 'Recipe deleted successfully' });
        } catch (error) {
            response.status(500).json({ message: error.message });
        }
    }
};

module.exports = recipeController;
