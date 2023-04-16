const express = require('express');
const router = express.Router();
const dataController = require('../../controllers/data.controller');
const middlewaresGuard = require('../../middlewares/jwttoken.guard');

router.post('/setup', middlewaresGuard, dataController.updateSetUp);
router.delete('/deleteSetup', middlewaresGuard, dataController.deleteSetUp)
router.get('/setup/hide', middlewaresGuard, dataController.hidedata)
router.get('/setup/:Vehicle_name', middlewaresGuard, dataController.getSetUp)
router.get('/', middlewaresGuard, dataController.getData)

module.exports = router;