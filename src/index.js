const express = require('express');
const initHandlebars = require('./config/handlebars.js');
const path = require('path');
const routes = require('./routes.js');
const initDatabase = require('./config/database.js');

const app = express();

initHandlebars(app);

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.resolve(__dirname, './public')));
app.use(express.static(path.resolve(__dirname, './public/images')));
app.use(routes);

initDatabase('mongodb://localhost:27017/recipes')
    .then(() => {
        app.listen(3500, console.log.bind(console, 'App is running on port http://localhost:3500 ...'))
    })
    .catch(err => {
        console.log(`Application init failed ${err.message}`)
    })