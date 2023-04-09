const vehicleRepository = require('../repositories/vehicle.repositories');

async function addVehicle(user, setUpTime, phone, name) {
    try {
        const newVehicleId = await vehicleRepository.registerVehicle(user, setUpTime, phone, name);
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
        throw new Error('Service: Cannot add new vehicle!');
    }
}

module.exports = {
    addVehicle, getVehicles
}