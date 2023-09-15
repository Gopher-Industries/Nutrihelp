const express = require('express');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const path = require('path');
const cookieManager = require('./controller/cookieController.js'); // Adjust the path as needed
const cookieParser = require('cookie-parser');


const app = express();
const port = process.env.PORT || 3000;

//render views screen on start
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.get('/', (req, res) => {
  res.render('home');
});


// Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//cookies middleware

// Set up cookie parser
app.use(cookieParser());

// Check for cookie on each request
app.use((req, res, next) => {
  const rememberToken = req.cookies.remember_token;

  if (rememberToken) {
    // Look up the user associated with the token (in a real application, this would involve database lookup)
    const user = lookupUserByToken(rememberToken);

    if (user) {
      // Automatically log in the user
      req.user = user;
    }
  }

  next();
});

app.use((req, res, next) => {
  // Add cookie management functions to the request and response objects
  res.setCookie = cookieManager.setCookie.bind(null, res);
  req.getCookie = cookieManager.getCookie.bind(null, req);
  res.clearCookie = cookieManager.clearCookie.bind(null, res);

  next();
});


//Routes
app.use("/", require("./routes/auth"));


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});