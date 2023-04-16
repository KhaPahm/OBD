const express = require('express');
const router =  express.Router();
const vehicleControllter = require('../../controllers/vehicle.controler');
const middlewaresGuard = require('../../middlewares/jwttoken.guard');

router.post('/', middlewaresGuard, vehicleControllter.vehicleRegistration);
router.get('/', middlewaresGuard, vehicleControllter.getVehicles)
router.get('/:vehicle_name', middlewaresGuard, vehicleControllter.getVehicleById)

module.exports = router;
