const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken');
const mysql = require('mysql2');
let dbConnect = require("../dbConnect");


// In-memory user database (replace with a database in a production environment)
// const users = [];

const signup = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        if (!name || !email || !password) {
          res.status(400).json({success: false, message:"Please fill in all fields"});
        }
        // Check if the user already exists
        //const existingUser = users.find((user) => user.username === username);
        const existingUser = false;
        dbConnect.connection.query(`SELECT name, email, userPassword FROM usersTable WHERE email = '${email}'`, function(error, results, fields) { //checking for users with unique email
          if (error) throw error;
          if (results.length > 0) {
              existingUser = true;
          }			
        });

        if (existingUser) {
          return res.status(400).json({ message: 'User already exists' });
        }
        console.log(`Sign up with name: ${name}, email: ${email} and password: ${password}`);
        // Hash the password
        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(password, saltRounds);
    
        // Create a new user
        const newUser = {
          name,
          email,
          userPassword: hashedPassword,
        };
    
        // Add the user to the in-memory database
        //users.push(newUser);
        dbConnect.connection.query(`INSERT INTO usersTable VALUES ( '${newUser.email}', '${newUser.name}', '${newUser.userPassword}' )`, function(error, results, fields) {
          if (error) throw error;	
        });
    
        res.status(201).json({ message: 'User created successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        if ( !email || !password) {
          res.status(400).json({success: false, message:"Please fill in all fields"});
        }
        // Find the user in the in-memory database
        //const user = users.find((user) => user.username === username);
        const user = {};
        dbConnect.connection.query(`SELECT email, userPassword FROM usersTable WHERE email = '${email}'`, async function(error, results, fields) {
          if (error) throw error;
          if (results.length > 0) {
              user['email'] = results[0].email;
              user['userPassword'] = results[0].userPassword;
          }	
          if (!user) {
            return res.status(401).json({ message: 'Invalid email or password' });
          }
          console.log(`Retrieved password: ${password} and userPassword: ${user.userPassword}`);
          // Compare passwords
          const passwordsMatch = await bcrypt.compare(password, user.userPassword);
          if (!passwordsMatch) {
            return res.status(401).json({ message: 'Invalid email or password' });
          }
      
          // Generate a JWT token
          const token = jwt.sign({ userId: user.email }, 'your-secret-key');
      
          res.status(200).json({ token });		
        });
      } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

module.exports = {
    signup,
    login
};