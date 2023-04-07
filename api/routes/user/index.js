const express = require('express');
const router = express.Router();
const userController = require('../../controllers/user.controler')

router.post('/login', userController.logIn)
router.post('/register', userController.registerAccount)

module.exports = router