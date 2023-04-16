const vehicleService = require('../services/vehicle.service');

async function vehicleRegistration(req, res, next) {
    try {
        const vehicleInfor = req.body;
        const user_name = req.userName;

        const new_id = await vehicleService.addVehicle(user_name, vehicleInfor);
        if(new_id) {
            res.status(200).json({
                code: 200,
                msg: "Vehicle registration successful!",
                vehicle_id: new_id
            })
        } else {
            res.status(401).json({
                code: 401,
                msg: "Vehicle already exists!",
            })
        }
    } catch(err) {
        console.log("An erro when register new vehicle!" , err.message);
        next(err);
    }

}

async function getVehicles(req, res, next) { 
    try {
        const user = req.userName;
        const vehicles = await vehicleService.getVehicles(user);
        res.status(200).json({
            code: 200,
            vehicles: vehicles
        })
    } catch(err) {
        console.log("An erro when register new vehicle!" , err.message);
        next(err);
    }
}

async function getVehicleById(req, res, next) {
    try {
        const vehicle_name = req.params.vehicle_name;
        const vehicle = await vehicleService.getVehicleById(vehicle_name);
        res.status(200).json({
            code: 200,
            vehicle_name: vehicle_name,
            vehicle: vehicle[0]
        })
    } catch(err) {
        console.log("An erro when get vehicle by ID!" , err.message);
        next(err);
    }
}

module.exports = {
    vehicleRegistration, getVehicles, getVehicleById
}
