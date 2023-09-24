const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'nutrihelp'
  });
  
  connection.connect(function(err) {
    if (err) {
      return console.error('error: ' + err.message);
    }
  
    console.log('Connected to the MySQL server.');
  });

  const createTableQuery = `
  CREATE TABLE IF NOT EXISTS usersTable (
    email VARCHAR(255) PRIMARY KEY,
    name VARCHAR(255),
    userPassword VARCHAR(255)
  )
`;
connection.query(createTableQuery, function(error, results, fields) {
  if (error) throw error;
  console.log(results);	
});


exports.connection = connection;