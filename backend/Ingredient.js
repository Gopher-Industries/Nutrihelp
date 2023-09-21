// Import required modules and set up Express
const express = require('express');
const db = require('./db'); // Import the database connection module
const app = express();
const port = 3000; // Choose a port for your server

app.use(express.json());

app.get('/ingredients', (req, res) => {
    db.query('SELECT * FROM Ingredient', (err, results) => {
      if (err) {
        console.error('Error querying ingredients: ', err);
        res.status(500).json({ error: 'Internal Server Error' });
        return;
      }
      res.json(results);
    });
  });

  app.post('/ingredients', (req, res) => {
    const { name } = req.body;
    db.query(
      'INSERT INTO Ingredient (name) VALUES (?)',
      [name],
      (err, results) => {
        if (err) {
          console.error('Error creating ingredient: ', err);
          res.status(500).json({ error: 'Internal Server Error' });
          return;
        }
        res.status(201).json({ message: 'Ingredient created successfully', id: results.insertId });
      }
    );
  });
  
