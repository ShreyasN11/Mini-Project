const mysql = require('mysql2');

const pool = mysql.createPool({
  connectionLimit: 10,
  host: '127.0.0.1',
  user: 'root',
  password: '12345678',
  database: 'healthdata'
}).promise();

module.exports = pool;