// Import express
const express = require('express');

// Config environment variable
require('dotenv').config();

const port = process.env.PROT || 3000;

const app = express();

app.listen(port, () => console.log(`Server is running in port: ${port}`))
