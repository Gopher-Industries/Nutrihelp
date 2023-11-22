// Import required modules and set up Express
const express = require('express');
const db = require('./db'); // Import the database connection module
const app = express();
const port = 3000; // Choose a port for your server

app.use(express.json());

app.get('/nutritionplans', (req, res) => {
    db.query('SELECT * FROM NutritionPlan', (err, results) => {
      if (err) {
        console.error('Error querying nutrition plans: ', err);
        res.status(500).json({ error: 'Internal Server Error' });
        return;
      }
      res.json(results);
    });
  });

  
  app.post('/nutritionplans', (req, res) => {
    const { nutrition, breakfast, lunch, dinner, dessert } = req.body;
    db.query(
      'INSERT INTO NutritionPlan (nutrition, breakfast, lunch, dinner, dessert) VALUES (?, ?, ?, ?, ?)',
      [JSON.stringify(nutrition), JSON.stringify(breakfast), JSON.stringify(lunch), JSON.stringify(dinner), JSON.stringify(dessert)],
      (err, results) => {
        if (err) {
          console.error('Error creating nutrition plan: ', err);
          res.status(500).json({ error: 'Internal Server Error' });
          return;
        }
        res.status(201).json({ message: 'Nutrition plan created successfully', id: results.insertId });
      }
    );
  });
  
  