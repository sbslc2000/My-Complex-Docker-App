const mysql = require("mysql");
const pool = mysql.createPool({
  connectionLimit: 10,
  host: process.env.MYSQL_HOST || 'localhost',
  user: process.env.MYSQL_USER || 'root',
  password: process.env.MYSQL_PASSWORD || '1234',
  database: process.env.MYSQL_DATABASE || 'todoapp',
  port: process.env.MYSQL_PORT || '3306'
});
exports.pool = pool;