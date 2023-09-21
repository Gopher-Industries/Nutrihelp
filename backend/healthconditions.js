// Import required modules and set up Express
const express = require('express');
const db = require('./db'); // Import the database connection module
const app = express();
const port = 3000; // Choose a port for your server

app.use(express.json());

app.get('/healthconditions', (req, res) => {
    db.query('SELECT * FROM HealthCondition', (err, results) => {
      if (err) {
        console.error('Error querying health conditions: ', err);
        res.status(500).json({ error: 'Internal Server Error' });
        return;
      }
      res.json(results);
    });
  });
  
  app.post('/healthconditions', (req, res) => {
    const { name, common } = req.body;
    db.query(
      'INSERT INTO HealthCondition (name, common) VALUES (?, ?)',
      [name, common],
      (err, results) => {
        if (err) {
          console.error('Error creating health condition: ', err);
          res.status(500).json({ error: 'Internal Server Error' });
          return;
        }
        res.status(201).json({ message: 'Health condition created successfully', id: results.insertId });
      }
    );
  });
  