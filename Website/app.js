const express = require('express');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const app = express();
const port = process.env.PORT || 3000;

let dbConnect = require("./dbConnect");

// Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Routes

//Routes
app.use("/", require("./routes/auth"));


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});