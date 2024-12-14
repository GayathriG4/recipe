const mongoose = require('mongoose');

const recipeSchema = new mongoose.Schema({
    name: String,
    description: String,
    ingredients: [String], // Correct data type for array
    instructions: String,
    cookingTime: Number,
    servings: Number
});

module.exports = mongoose.model('Recipe', recipeSchema, 'recipes');
