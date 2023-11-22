// Import required modules and set up Express
const express = require('express');
const db = require('./db'); // Import the database connection module
const app = express();
const port = 3000; // Choose a port for your server

app.use(express.json());

app.get('/users/:email', (req, res) => {
    const { email } = req.params;
    db.query('SELECT * FROM User WHERE email = ?', [email], (err, results) => {
      if (err) {
        console.error('Error querying user data: ', err);
        res.status(500).json({ error: 'Internal Server Error' });
        return;
      }
      if (results.length === 0) {
        res.status(404).json({ error: 'User not found' });
        return;
      }
      const user = results[0];
      res.json(user);
    });
  });

  app.post('/users', (req, res) => {
    const { email, password, profileID } = req.body;
    db.query(
      'INSERT INTO User (email, password, profileID) VALUES (?, ?, ?)',
      [email, password, profileID],
      (err, results) => {
        if (err) {
          console.error('Error creating user: ', err);
          res.status(500).json({ error: 'Internal Server Error' });
          return;
        }
        res.status(201).json({ message: 'User created successfully', id: results.insertId });
      }
    );
  });
    