const { symlink } = require('fs');
const db =  require('./db');

async function registerVehicle(user, setUpTime, phone, name) {
    //Insert new vehicle and get respone then get id insert (last inserted id) for next query (insert to handle)
    const checked = await db.query(
        'SELECT * FROM Vehicle WHERE Name = ?',
        [name]
    ) 
    if(!checked.length) {
        await db.query(
            'INSERT INTO Vehicle (SetUpTime, Phone, Name) VALUES (?,?,?)',
            [setUpTime, phone, name]
        );
        //Insert to table handle
        await db.query(
            'INSERT INTO Handle VALUES (?,?)',
            [user, name]
        )
    
        await db.query(
            'INSERT INTO SetUp (Vehicle_Name) VALUES (?)',
            [name]
        )
        return name;
    } else {
        return null;
    }
}

async function getVehicles(user) {
    const vehicles = await db.query(
        'SELECT V.* FROM Vehicle V INNER JOIN Handle H ON V.Name = H.Vehicle_Name WHERE H.User_Name = ?',
        [user]
    )
    return vehicles;
}



module.exports = {
    registerVehicle, getVehicles
}