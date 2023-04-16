const dataService = require('../services/data.service');

async function updateSetUp(req, res, next) {
    try {
        const {Vehicle_name, ColunmName, Value} = req.body;
        const result = await dataService.updateSetUp({Vehicle_name, ColunmName, Value});
        res.status(200).json({
            code: 200,
            msg: `Column ${ColunmName} has changed to ${Value}`,
            vehicle_id: Vehicle_name,
        })
        
    } catch(err) {
        console.log("An erro when update set up for vehicle" , err.message);
        next(err);
    }
}

async function getSetUp(req, res, next) {
    try {
        const Vehicle_name = req.params.Vehicle_name;
        const result = await dataService.getSetUp(Vehicle_name);
        res.json(result)
    } catch(err) {
        console.log("An erro when get set up for vehicle" , err.message);
        next(err);
    }
}

async function deleteSetUp(req, res, next) {
    try {
        const {column, vehicle_name} = req.query;
        const id = await dataService.deleteSetUp(column, vehicle_name);
        res.status(200).json({
            code: 200,
            msg: `Was delete setup of column ${column}`,
        })
    } catch(err) {
        console.log("An erro when update set up for vehicle" , err.message);
        next(err);
    }
}

async function hidedata(req, res, next) {
    try {
        const {column, vehicle_name} = req.query;
        await dataService.hidedata(column, vehicle_name);
        res.status(200).json({
            msg: `Data ${column} was hide!`
        })
    } catch(err) {
        console.log("An erro when hide data for vehicle" , err.message);
        next(err);
    }
}

async function getData(req, res, next) {
    try {
        const {vehicle_name, limit} = req.query;
        const datas = await dataService.getData(vehicle_name, limit);
        if(datas) {
            res.status(200).json({
                code: 200,
                data: datas
            });
        } else {
            res.status(401).json({
                code: 401,
                data: "Data wasn't setup for display!"
            })
        }
 
    } catch(err) {

    }
}

module.exports = {
    updateSetUp, deleteSetUp, getSetUp, hidedata, getData
}