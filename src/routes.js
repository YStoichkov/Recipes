const express = require('express');
const router = express.Router();
const homeController = require('./controllers/homeController.js');
const recipeController = require('./controllers/recipeController.js');

router.use('/', homeController);
router.use('/recipes', recipeController);
router.use('*', (request, response) => {
    response.render('404');
})
module.exports = router;