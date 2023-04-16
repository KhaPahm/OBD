// Import express
const express = require('express');
const path = require('path');
const router = require('./api/routes/index')
const cors = require('cors')
require('dotenv').config()


// Config environment variable
require('dotenv').config();

const port = process.env.PORT || 3000;

const app = express();

//Express urlencode;
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cors());
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
})

//Import routes
app.get('/', (req, res, next) => {
    res.send("Wellcome to OBD API")
})

app.use('/api', router)

app.use(function(req, res) {
    res.status(404).send({url: req.originalUrl + ' not found'})
})

app.listen(port, () => console.log(`Server is running in port: ${port}`))
