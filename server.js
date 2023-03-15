// Import express
const express = require('express');
const path = require('path');

// Config environment variable
require('dotenv').config();

const port = process.env.PROT || 3000;

const app = express();

//Import routes
const routes = require(path.join(__dirname, './api/routes.js'))
routes(app)

app.use(function(req, res) {
    res.status(404).send({url: req.originalUrl + 'not found'})
})

app.listen(port, () => console.log(`Server is running in port: ${port}`))
