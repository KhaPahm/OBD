const express = require('express');
const router =  express.Router();
const vehicleControllter = require('../../controllers/vehicle.controler')

router.post('/', vehicleControllter.vehicleRegistration);
router.get('/', vehicleControllter.getVehicles)

module.exports = router;
