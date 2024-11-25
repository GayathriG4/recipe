// Import Recipe model
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
            // Get the recipe ID from the request parameters
            const { id } = request.params;

            // Find the document for the matching ID
            const recipe = await Recipe.findById(id);

            // If no document is found, return a 404 Not Found status code
            if (!recipe) {
                return response.status(404).json({ message: 'Recipe not found' });
            }

            // If a document is found, return a 200 OK status code and the document
            response.status(200).json(recipe);
        } catch (error) {
            response.status(500).json({ message: error.message });
        }
    },
    createRecipe: async (request, response) => {
        try {
            // Extract the recipe details from the request body
            const { name, description, ingredients, instructions, cookingTime, servings } = request.body;

            // Create a new recipe object with the extracted details
            const newRecipe = new Recipe({
                name,
                description,
                ingredients,
                instructions,
                cookingTime,
                servings
            });

            // Save the new recipe object to the database
            await newRecipe.save();

            // Send a 201 Created status code and the new recipe object
            response.status(201).json({ message: 'Recipe created successfully' });
        } catch (error) {
            response.status(500).json({ message: error.message });
        }
    },
    updateRecipe: async (request, response) => {
        try {
            // Get the recipe ID from the request parameters
            const { id } = request.params;

            // Extract the recipe details from the request body
            const { name, description, ingredients, instructions, cookingTime, servings } = request.body;

            // Find the document for the matching ID
            const recipe = await Recipe.findById(id);

            // If no document is found, return a 404 Not Found status code
            if (!recipe) {
                return response.status(404).json({ message: 'Recipe not found' });
            }

            // Update the recipe fields
            recipe.name = name || recipe.name;
            recipe.description = description || recipe.description;
            recipe.ingredients = ingredients || recipe.ingredients;
            recipe.instructions = instructions || recipe.instructions;
            recipe.cookingTime = cookingTime || recipe.cookingTime;
            recipe.servings = servings || recipe.servings;

            // Save the updated document to the database
            await recipe.save();

            // Send a 200 OK status code and the updated document
            response.status(200).json({ message: 'Recipe updated successfully', recipe });
        } catch (error) {
            response.status(500).json({ message: error.message });
        }
    },
   
    
    deleteRecipe: async (request, response) => {
        try {
            // Get the recipe ID from the request parameters
            const { id } = request.params;

            // Find the document for the matching ID and delete it
            const recipe = await Recipe.findByIdAndDelete(id);

            // If no document is found, return a 404 Not Found status code
            if (!recipe) {
                return response.status(404).json({ message: 'Recipe not found' });
            }

            // Send a 200 OK status code
            response.status(200).json({ message: 'Recipe deleted successfully' });
        } catch (error) {
            response.status(500).json({ message: error.message });
        }
    }
}

module.exports = recipeController;
