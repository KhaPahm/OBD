const db = require('./db');

async function getAccount(name) {
    try {
        const record = await db.query(
            `SELECT * FROM User WHERE User_name = ?`,
            [name]
        )
        return record;
    } catch(err) {
        console.log("Erro when select data from database!" + err);
        throw err;
    }
}

async function registerAccount (name, hashedPassword, address, role = 1) { 
    try{
        const record = await db.query(
            `INSERT INTO User (User_name, Password, Role, Address) VALUES (?, ?, ?, ?)`,
            [name, hashedPassword, role, address]
        )
        return record;
    } catch(err) {
        console.log("Erro when insert data to database!");
        throw err;
    }
}

module.exports = {
    getAccount, registerAccount,
}