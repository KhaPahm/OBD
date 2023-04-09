const express = require('express');
const router = express.Router();
const user = require('./user')
const vehicle = require('./vehicle');
const data = require('./data');

router.use('/user', user);
router.use('/vehicle', vehicle);
router.use('/data', data)

module.exports = router;