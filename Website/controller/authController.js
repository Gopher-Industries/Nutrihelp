const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken');

// In-memory user database (replace with a database in a production environment)
const users = [];

const signup = async (req, res) => {
    try {
        const { username, password } = req.body;
    
        // Check if the user already exists
        const existingUser = users.find((user) => user.username === username);
        if (existingUser) {
          return res.status(400).json({ message: 'User already exists' });
        }
        console.log(`Sign up with username: ${username} and password: ${password}`);
        // Hash the password
        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(password, saltRounds);
    
        // Create a new user
        const newUser = {
          username,
          password: hashedPassword,
        };
    
        // Add the user to the in-memory database
        users.push(newUser);
    
        res.status(201).json({ message: 'User created successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

const login = async (req, res) => {
    try {
        const { username, password } = req.body;
    
        // Find the user in the in-memory database
        const user = users.find((user) => user.username === username);
        if (!user) {
          return res.status(401).json({ message: 'Invalid username or password' });
        }
    
        // Compare passwords
        const passwordsMatch = await bcrypt.compare(password, user.password);
        if (!passwordsMatch) {
          return res.status(401).json({ message: 'Invalid username or password' });
        }
    
        // Generate a JWT token
        const token = jwt.sign({ userId: user.username }, 'your-secret-key');
    
        res.status(200).json({ token });
      } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

module.exports = {
    signup,
    login
};