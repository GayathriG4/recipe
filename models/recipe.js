const mongoose = require('mongoose');

const recipeSchema = new mongoose.Schema({
    name: String,
    description: String,
    ingredients: [String],
    instructions: String,
    cookingTime: Number,
    servings: Number,
    // createdAt: {
    //     type: Date,
    //     default: Date.now
    // },
    // updatedAt: {
    //     type: Date,
    //     default: Date.now
    // }
});

module.exports = mongoose.model('Recipe', recipeSchema, 'recipes');
