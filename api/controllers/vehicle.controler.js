const vehicleService = require('../services/vehicle.service');

async function vehicleRegistration(req, res, next) {
    try {
        let user = req.session.user;
        if(user) {
            user = JSON.parse(user)
            const user_name = user.name;
            const name = req.body.name;
            const phone = req.body.phone;
            const setUpTime = req.body.setUpTime;
            const new_id = await vehicleService.addVehicle(user_name, setUpTime, phone, name);
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
        } else {
            //If user hasn't logined, sent err!
            next();
        }
    } catch(err) {
        console.log("An erro when register new vehicle!" , err.message);
        next(err);
    }

}

async function getVehicles(req, res, next) { 
    try {
        let user = req.session.user;
        user = JSON.parse(user)
        if(user) {
            const user_name = user.name;
            const vehicles = await vehicleService.getVehicles(user_name);
            res.status(200).json({
                code: 200,
                vehicles: vehicles
            })
        } else {
            //If user hasn't logined, sent err!
            next();
        }
    } catch(err) {
        console.log("An erro when register new vehicle!" , err.message);
        next(err);
    }
}

module.exports = {
    vehicleRegistration, getVehicles
}
