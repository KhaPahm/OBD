// Import express
const express = require('express');
const path = require('path');
const router = require('./api/routes/index')
require('dotenv').config()


// Config environment variable
require('dotenv').config();

const port = process.env.PROT || 3000;

const app = express();

//Express urlencode;
app.use(express.json())
app.use(express.urlencoded({extended: false}));

//Express session
app.use(require("express-session")({secret: process.env.SESSION_SECRECT_KEY||"thisismysecrctekeyfhrgfgrfrty84fwir767"}))


//Import routes
app.get('/', (req, res, next) => {
    res.send("Wellcome to OBD API")
})

app.use('/api', router)

app.use(function(req, res) {
    res.status(404).send({url: req.originalUrl + ' not found'})
})

app.listen(port, () => console.log(`Server is running in port: ${port}`))
