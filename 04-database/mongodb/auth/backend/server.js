const dotenv = require('dotenv');
dotenv.config();

const express = require('express');
const mongoose = require('mongoose');
const User = require('./models/user.js');

const app = express();
const PORT = 3000;

// Middleware
app.use(express.json());

// Connect to MongoDB
mongoose
    .connect(process.env.MONGO_URI)
    .then(() => console.log('Connected to MongoDB'))
    .catch((err) => console.log('Failed to connect to MongoDB:', err));

// Register
app.post('/api/register', async (req, res) => {
    try {
        console.log('1. Register API called');

        // Get data from request
        const { email, password } = req.body;

        console.log('2. Received data:');
        console.log('Email:', email);
        console.log('Password:', password);

        // Check required fields
        if (!email || !password) {
            console.log('3. Missing email or password');

            return res.status(400).json({
                message: 'Email and password are required',
            });
        }

        console.log('3. Validation successful');

        // Check existing user
        console.log('4. Checking if user already exists...');

        const existingUser = await User.findOne({ email });

        if (existingUser) {
            console.log('5. User already exists');

            return res.status(400).json({
                message: 'User already exists',
            });
        }

        console.log('5. User does not exist');

        // Create user
        console.log('6. Creating new user...');

        const user = await User.create({
            email,
            password,
        });

        console.log('7. User created successfully:');
        console.log(user);

        // Send response
        console.log('8. Sending response to client');

        res.status(201).json({
            message: 'User registered successfully',
            user,
        });
    } catch (error) {
        console.log('ERROR OCCURRED:');
        console.log(error.message);

        res.status(500).json({
            message: 'Something went wrong',
            error: error.message,
        });
    }
});

// Login
app.post('/api/login', async (req, res) => {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user || user.password !== password) {
        return res.status(401).json({ message: 'Invalid credentials' });
    }

    res.json({ message: 'Login successful', user });
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}/api/register`);
});
