const db = require('./db');

async function getAccount(name) {
    try {
        const record = await db.query(
            `SELECT * FROM User WHERE name = ?`,
            [name]
        )
        return record;
    } catch(err) {
        console.log("Erro when select data from database!");
        throw err;
    }
}

async function registerAccount (name, hashedPassword, address, role = 1) { 
    try{
        const record = await db.query(
            `INSERT INTO User (Name, Password, Role, Address) VALUES (?, ?, ?, ?)`,
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