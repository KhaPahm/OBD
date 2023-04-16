const vehicleRepository = require('../repositories/vehicle.repositories');

async function addVehicle(user, vehicleInfor) {
    try {
        const newVehicleId = await vehicleRepository.registerVehicle(user, vehicleInfor);
        return newVehicleId; 
    } catch(err) {
        throw new Error('Service: Cannot add new vehicle!');
    }
}

async function getVehicles(user) {
    try {
        const vehicles = await vehicleRepository.getVehicles(user);
        return vehicles; 
    } catch(err) {
        throw new Error('Service: Cannot get vehicle!');
    }
}

async function getVehicleById(vehicle_name) {
    try {
        const vehicle = await vehicleRepository.getVehicleById(vehicle_name);
        return vehicle;
    } catch(err) {
        throw new Error('Service: Cannot get vehicle by ID!');
    }
}

module.exports = {
    addVehicle, getVehicles, getVehicleById
}