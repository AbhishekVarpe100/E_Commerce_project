
const mysql2 = require('mysql')
const dotenv = require('dotenv').config();
// dotenv.config();

const connection = mysql2.createConnection({
    host: process.env.HOST,
    user: process.env.USER,
    port: process.env.PORT,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
});

connection.connect((err) => {
    if (err) {
        console.log("Error in server")
    }
    else {
        console.log("Connected successfully");
    }
})

module.exports=connection;

