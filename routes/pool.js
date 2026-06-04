const mysql = require("mysql2");
require("dotenv").config();

var pool = mysql.createConnection({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  multipleStatements: true,
});

pool.connect((err) => {
  if (err) {
    console.log("DB CONNECTION ERROR:", err);
  } else {
    console.log("DATABASE CONNECTED SUCCESSFULLY");
  }
});

module.exports = pool;