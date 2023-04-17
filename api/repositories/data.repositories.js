const db =  require('./db');

async function updateSetUp({Vehicle_name, ColunmName, Value}) {
    try{
        const respone = await db.query(
            `INSERT INTO SetUp VALUES (?,?,?,?)`,
            [ColunmName, Value, true, Vehicle_name]
        )
        return respone;
    } catch(err) {
        throw(err);
    }
}

async function deleteSetUp(column, vehicle_name) {
    await db.query(
        `DELETE FROM SetUp WHERE ColunmName = ? AND Vehicle_name = ?`,
        [column, vehicle_name]
    )
}

async function hidedata(column, vehicle_name) {
    const check = await db.query(
        'SELECT State FROM SetUp WHERE ColunmName = ? AND Vehicle_name = ?',
        [column, vehicle_name]
    )
    if(check[0].State == 1) {
        await db.query(
            `UPDATE SetUp SET State = 0 WHERE ColunmName = ? AND Vehicle_name = ?`,
            [column, vehicle_name]
        )
    } else {
        await db.query(
            `UPDATE SetUp SET State = 1 WHERE ColunmName = ? AND Vehicle_name = ?`,
            [column, vehicle_name]
        )
    }
    return !check.State
}

async function getSetup(vehicle_name) {
    const record =  await db.query(
        `SELECT * FROM SetUp WHERE Vehicle_Name = ?`,
        [vehicle_name]
    );

    return record; 
}

// async function getColunmNameOfSetUp(vehicle_name) {
//     const record =  await db.query(
//         `SELECT ColunmName FROM SetUp WHERE Vehicle_Name = ?`,
//         [vehicle_name]
//     );

//     return record; 
// }

async function getData(queryColumn, vehicle_name, limit) {
    const queryString = `SELECT ${queryColumn} FROM Data WHERE Vehicle_name = '${vehicle_name}' LIMIT ${limit}`;
    const record = await db.query(
        queryString,
        []
    );
    return record
}

module.exports = {
    updateSetUp, deleteSetUp, getSetup, getData, hidedata
}