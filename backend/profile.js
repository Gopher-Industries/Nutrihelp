// Import required modules and set up Express
const express = require('express');
const db = require('./db'); // Import the database connection module
const app = express();
const port = 3000; // Choose a port for your server

app.use(express.json());

// Define API endpoints for the 'Profile' table
app.get('/profiles', (req, res) => {
  db.query('SELECT * FROM Profile', (err, results) => {
    if (err) {
      console.error('Error querying profiles: ', err);
      res.status(500).json({ error: 'Internal Server Error' });
      return;
    }
    res.json(results);
  });
});

app.post('/profiles', (req, res) => {
  const { firstName, lastName, dateOfBirth, gender, weight, height, activityLevel } = req.body;
  db.query(
    'INSERT INTO Profile (firstName, lastName, dateOfBirth, gender, weight, height, activityLevel) VALUES (?, ?, ?, ?, ?, ?, ?)',
    [firstName, lastName, dateOfBirth, gender, weight, height, activityLevel],
    (err, results) => {
      if (err) {
        console.error('Error creating profile: ', err);
        res.status(500).json({ error: 'Internal Server Error' });
        return;
      }
      res.status(201).json({ message: 'Profile created successfully', id: results.insertId });
    }
  );
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
