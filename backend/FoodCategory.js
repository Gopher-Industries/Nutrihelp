// Import required modules and set up Express
const express = require('express');
const db = require('./db'); // Import the database connection module
const app = express();
const port = 3000; // Choose a port for your server

app.use(express.json());

app.get('/foodcategories', (req, res) => {
    db.query('SELECT * FROM FoodCategory', (err, results) => {
      if (err) {
        console.error('Error querying food categories: ', err);
        res.status(500).json({ error: 'Internal Server Error' });
        return;
      }
      res.json(results);
    });
  });
  

  app.post('/foodcategories', (req, res) => {
    const { name, ingredients } = req.body;
    db.query(
      'INSERT INTO FoodCategory (name, ingredients) VALUES (?, ?)',
      [name, JSON.stringify(ingredients)],
      (err, results) => {
        if (err) {
          console.error('Error creating food category: ', err);
          res.status(500).json({ error: 'Internal Server Error' });
          return;
        }
        res.status(201).json({ message: 'Food category created successfully', id: results.insertId });
      }
    );
  });
  