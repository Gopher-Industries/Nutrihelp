
const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

db.connect((err) => {
    if (err) {
      console.error('Database connection error: ' + err.message);
      return;
    }
    console.log('Connected to the MySQL server');
  });

// MySQL Connection
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'Nutrihelp',
  });


// Handle POST requests for signup
app.post('/signup', (req, res) => {
  const { name, email, pass } = req.body;

  // We should hash the password before storing it in the database for security.

  const sql = 'INSERT INTO users (name, email, password) VALUES (?, ?, ?)';
  db.query(sql, [name, email, pass], (err, result) => {
    if (err) {
      console.error('Error inserting data into database: ' + err.message);
      res.status(500).json({ error: 'An error occurred' });
    } else {
      console.log('Data inserted into database');
      res.status(200).json({ message: 'Signup successful' });
    }
  });
}); 
