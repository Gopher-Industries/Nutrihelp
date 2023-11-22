// db.js
const mysql = require('mysql');

const db = mysql.createConnection({
  host: 'yoMysql@localhost:3306',
  user: 'root',
  password: '',
  database: 'nutrihelp',
});

db.connect((err) => {
  if (err) {
    console.error('Error connecting to database: ', err);
    return;
  }
  console.log('Connected to the database');
});

module.exports = db;
