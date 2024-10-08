const mysql2 = require('mysql2');

const pool = mysql2.createPool({
    host: "localhost",
    user: 'root',
    database: 'node-complete',
    password: "Adedamola@97",
});

module.exports = pool.promise();