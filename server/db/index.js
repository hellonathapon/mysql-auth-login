const mysql = require('mysql');

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'HR424x01',
    database: 'nodejs_login'
})
db.connect((err) => err ? console.error(err) : console.log(`Successfully connected to DB!`));
module.exports = db;