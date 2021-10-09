const express = require('express');
const router = express.Router();
const path = require('path');

const getBreads = (req, res) => {
    res.render('recipes/all');
}
const getSalads = (req, res) => {
    res.render('recipes/all');
}
const getSoups = (req, res) => {
    res.render('recipes/all');
}
const getMains = (req, res) => {
    res.render('recipes/all');
}
const getDesserts = (req, res) => {
    res.render('recipes/all');
}
const getDrinks = (req, res) => {
    res.render('recipes/all');
}
const getWinterFoods = (req, res) => {
    res.render('recipes/all');
}
const getAddRecipe = (req, res) => {
    res.render('recipes/add');
}

router.get('/salads', getSalads);
router.get('/breads', getBreads);
router.get('/soups', getSoups);
router.get('/mains', getMains);
router.get('/desserts', getDesserts);
router.get('/drinks', getDrinks);
router.get('/winter-foods', getWinterFoods);
router.get('/add', getAddRecipe);
module.exports = router;