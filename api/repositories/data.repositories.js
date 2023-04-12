const db =  require('./db');

async function updateSetUp(column, value, vehicle_name) {
    const respone = await db.query(
        `UPDATE SetUp SET ${column} = ? WHERE Vehicle_Name = ?`,
        [value, vehicle_name]
    )
    return respone.insertId;
}

async function deleteSetUp(column, vehicle_name) {
    await db.query(
        `UPDATE SetUp SET ${column} = NULL WHERE Vehicle_Name = ?`,
        [vehicle_name]
    )
}

async function getSetup(vehicle_name) {
    const record =  await db.query(
        `SELECT * FROM SetUp WHERE Vehicle_Name = ?`,
        [vehicle_name]
    );

    return record; 
}

async function getData(queryColumn, vehicle_name, limit) {
    const queryString = `SELECT ${queryColumn} FROM Data WHERE Vehicle_Name = '${vehicle_name}' LIMIT ${limit}`;

    const record = await db.query(
        queryString,
        []
    );
    return record
}

module.exports = {
    updateSetUp, deleteSetUp, getSetup, getData
}