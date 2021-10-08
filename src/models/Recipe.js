const mongoose = require('mongoose');

const recipeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description:{
        type:String,
        required: true,
    },
    images:{
        type:[{
            type:String,
        }]
    },
    ingredients:{
        type:
    }
});

const Recipe = mongoose.model('Recipe',recipeSchema);

module.exports = Recipe;