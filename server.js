// // Import express
// const express = require('express');

// // Config environment variable
// require('dotenv').config();

// const port = process.env.PROT || 3000;

// const app = express();
// app

let express = require('express');
let app = express();
let port = process.env.PORT || 3000;

app.listen(port);

console.log('RESTful API server started on: ' + port);