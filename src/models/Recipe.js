const mongoose = require('mongoose');

const recipeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true,
        minlength: 20,
        maxlength: 200
    },
    cookingTime: {
        type: String,
        required: true,
    },
    portions: {
        type: String,
        required: true,
    },
    images: {
        type: [{
            type: String,
        }]
    },
    ingredients: {
        type: mongoose.Types.ObjectId,
        ref: 'Ingredient',
    },
    category: {
        type: String,
        required: true,
    }
});

const Recipe = mongoose.model('Recipe', recipeSchema);

module.exports = Recipe;