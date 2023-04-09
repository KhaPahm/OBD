const express = require('express');
const router = express.Router();
const dataController = require('../../controllers/data.controller');

router.post('/setup', dataController.updateSetUp);
router.get('/deleteSetup', dataController.deleteSetUp)
router.get('/', dataController.getSetUp)

module.exports = router;