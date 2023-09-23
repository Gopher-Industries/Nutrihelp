// Import required modules and set up Express
const express = require('express');
const db = require('./db'); // Import the database connection module
const app = express();
const port = 3000; // Choose a port for your server

app.use(express.json());

app.get('/meals', (req, res) => {
    db.query('SELECT * FROM Meal', (err, results) => {
      if (err) {
        console.error('Error querying meals: ', err);
        res.status(500).json({ error: 'Internal Server Error' });
        return;
      }
      res.json(results);
    });
  });
  
  app.post('/meals', (req, res) => {
    const { mealName, mealType, keywords, description, weight, servings, servingSize, ingredients, recipe, nutrition, images, thumbnail } = req.body;
    db.query(
      'INSERT INTO Meal (mealName, mealType, keywords, description, weight, servings, servingSize, ingredients, recipe, nutrition, images, thumbnail) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)',
      [mealName, mealType, JSON.stringify(keywords), JSON.stringify(description), weight, servings, servingSize, JSON.stringify(ingredients), recipe, JSON.stringify(nutrition), JSON.stringify(images), thumbnail],
      (err, results) => {
        if (err) {
          console.error('Error creating meal: ', err);
          res.status(500).json({ error: 'Internal Server Error' });
          return;
        }
        res.status(201).json({ message: 'Meal created successfully', id: results.insertId });
      }
    );
  });
  