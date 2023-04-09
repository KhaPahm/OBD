const dataService = require('../services/data.service');

async function updateSetUp(req, res, next) {
    try {
        if(req.session.user) {
            const {vehicle_name, column, value} = req.body;
            const id = await dataService.updateSetUp(column, value, vehicle_name);
            res.status(200).json({
                code: 200,
                msg: `Column ${column} has changed to ${value}`,
                vehicle_id: id,
            })
        } else {
            next();
        }
    } catch(err) {
        console.log("An erro when update set up for vehicle" , err.message);
        next(err);
    }
}

async function deleteSetUp(req, res, next) {
    try {
        if(req.session.user) {
            const {vehicle_name, column} = req.query;
            const id = await dataService.deleteSetUp(column, vehicle_name);
            res.status(200).json({
                code: 200,
                msg: `Was delete setup of column ${column}`,
            })
        } else {
            next();
        }
    } catch(err) {
        console.log("An erro when update set up for vehicle" , err.message);
        next(err);
    }
}

async function getSetUp(req, res, next) {
    try {
        if(req.session.user) {
            const {vehicle_name, limit} = req.query;
            const datas = await dataService.getData(vehicle_name, limit);
            res.status(200).json({
                code: 200,
                data: datas
            });
        } else {
            next();
        }
 
    } catch(err) {

    }
}

module.exports = {
    updateSetUp, deleteSetUp, getSetUp
}