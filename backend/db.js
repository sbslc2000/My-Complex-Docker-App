const mysql = require("mysql");
const pool = mysql.createPool({
  connectionLimit: 10,
  host: process.env.MYSQL_HOST || 'localhost',
  user: process.env.MYSQL_USER || 'root',
  password: process.env.MYSQL_PASSWORD || '1234',
  database: process.env.MYSQL_DATABASE || 'todoapp',
  port: process.env.MYSQL_PORT || '3306'
});

console.log("MYSQL_HOST: ", process.env.MYSQL_HOST);
console.log("MYSQL_USER: ", process.env.MYSQL_USER);
console.log("MYSQL_PASSWORD: ", process.env.MYSQL_PASSWORD);
console.log("MYSQL_DATABASE: ", process.env.MYSQL_DATABASE);
console.log("MYSQL_PORT: ", process.env.MYSQL_PORT);

exports.pool = pool;