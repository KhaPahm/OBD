const { symlink } = require('fs');
const db =  require('./db');
 
async function registerVehicle(name, vehicleInfor) {
    //Insert new vehicle and get respone then get id insert (last inserted id) for next query (insert to handle)
    const checked = await db.query(
        'SELECT * FROM Vehicle WHERE Vehicle_name = ?',
        [vehicleInfor.Vehicle_name]
    ) 
    if(!checked.length) {
        const queryAddVehicle = Object.keys(vehicleInfor).toString(',');
        const valueAddVehicle = Object.values(vehicleInfor)
        await db.query(
            `INSERT INTO Vehicle (${queryAddVehicle}) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?)`,
            valueAddVehicle
        );
        //Insert to table handle
        await db.query(
            'INSERT INTO Handle (User_name, Vehicle_name) VALUES (?,?)',
            [name, vehicleInfor.Vehicle_name]
        )
        return vehicleInfor.Vehicle_name;
    } else {
        return null;
    }
}

async function getVehicles(user) {
    const vehicles = await db.query(
        'SELECT V.* FROM Vehicle V INNER JOIN Handle H ON V.Vehicle_name = H.Vehicle_Name WHERE H.User_Name = ?',
        [user]
    )
    return vehicles;
}

async function getVehicleById(vehicle_name) {
    const vehicle = await db.query(
        'SELECT * FROM Vehicle WHERE Vehicle_name = ?',
        [vehicle_name]
    )
    return vehicle;
}


module.exports = {
    registerVehicle, getVehicles, getVehicleById
}