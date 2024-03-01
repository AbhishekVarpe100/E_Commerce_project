
const mysql2 = require('mysql')
const dotenv = require('dotenv').config();
// dotenv.config();

const connection = mysql2.createConnection({
    host: '127.0.0.1',
    user:'root',
    port: 3306,
    password: '',
    database: 'abhishek'
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

