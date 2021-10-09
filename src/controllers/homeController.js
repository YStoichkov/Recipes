const express = require('express');
const router = express.Router();

const home = (req, res) => {
    res.render('index');
}

const getAddRecipe = (req, res) => {
    console.log('from add recipe')
    res.render('recipes/addRecipe');
}

router.get('/', home);

module.exports = router;