const mysql = require("mysql2/promise");
require('dotenv').config();

async function query(sql, params) {
    var con = await mysql.createConnection({
        host: process.env.DB_HOST || "localhost",
        user: process.env.DB_USER || "root",
        password: process.env.DB_PASSWORD || "",
        database: process.env.DB_NAME || "OBD",
    })
    const [results, ] = await con.execute(sql, params);
    return results;
}

module.exports = {query}