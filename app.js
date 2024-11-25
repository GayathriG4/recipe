const express = require('express');
const recipeRouter = require('./routes/recipeRoutes');

const app = express();

app.use(express.json());

app.use('/api/v1/recipes', recipeRouter);

app.get('/', (req, res) => {
    res.send('Welcome to the Recipe API. Use /api/v1/recipes for CRUD operations.');
});


module.exports = app;
