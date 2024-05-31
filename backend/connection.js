
const mysql = require('mysql')

require('dotenv').config();

const connection = mysql.createConnection({
    host: process.env.HOST, 
    user: process.env.DATABASE_USER,
    port: process.env.PORT,
    password: '',
    database: process.env.DATABASE
});

connection.connect((err) => {
    if (err) {
        console.log("Error in server"+ process.env.DATABASE_USER)
    }
    else {
        console.log("Connected successfully");
    }
})

module.exports=connection;

