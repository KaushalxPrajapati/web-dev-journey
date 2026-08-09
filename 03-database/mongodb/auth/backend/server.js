const dotenv = require('dotenv');
dotenv.config();

const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const User = require('./models/user.js');

const app = express();
const PORT = process.env.PORT || 3000;
const MONGO_URI = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/auth-app';
const STATIC_ROOT = path.resolve(__dirname, '..');
const memoryUsers = [];

app.use(express.json());
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    console.log('REQUEST', req.method, req.path);
    if (req.method === 'OPTIONS') {
        return res.sendStatus(204);
    }
    next();
});

app.get('/', (req, res) => {
    res.sendFile(path.join(STATIC_ROOT, 'createAcc.html'));
});

app.get('/createAcc.html', (req, res) => {
    res.sendFile(path.join(STATIC_ROOT, 'createAcc.html'));
});

app.get('/login.html', (req, res) => {
    res.sendFile(path.join(STATIC_ROOT, 'login.html'));
});

app.get('/resetPassword.html', (req, res) => {
    res.sendFile(path.join(STATIC_ROOT, 'resetPassword.html'));
});

app.get('/success.html', (req, res) => {
    res.sendFile(path.join(STATIC_ROOT, 'success.html'));
});

function normalizeEmail(email) {
    return (email || '').toLowerCase().trim();
}

async function findUserByEmail(email) {
    if (mongoose.connection.readyState === 1) {
        return User.findOne({ email });
    }
    return memoryUsers.find((user) => user.email === email);
}

async function createUser({ email, password }) {
    if (mongoose.connection.readyState === 1) {
        return User.create({ email, password });
    }
    const user = { email, password, role: 'user' };
    memoryUsers.push(user);
    return user;
}

mongoose
    .connect(MONGO_URI, { serverSelectionTimeoutMS: 5000 })
    .then(() => console.log('Connected to MongoDB'))
    .catch((err) => {
        console.log('Failed to connect to MongoDB:', err.message);
        console.log('Falling back to an in-memory user store for local development.');
    });

app.post('/api/register', async (req, res) => {
    try {
        const { email, password } = req.body;
        const normalizedEmail = normalizeEmail(email);

        if (!normalizedEmail || !password) {
            return res.status(400).json({ message: 'Email and password are required' });
        }

        const existingUser = await findUserByEmail(normalizedEmail);
        if (existingUser) {
            return res.status(400).json({ message: 'User already exists' });
        }

        const user = await createUser({ email: normalizedEmail, password });
        res.status(201).json({ message: 'User registered successfully', user });
    } catch (error) {
        res.status(500).json({ message: 'Something went wrong', error: error.message });
    }
});

app.post('/api/login', async (req, res) => {
    try {
        const { email, password } = req.body;
        const normalizedEmail = normalizeEmail(email);
        const user = await findUserByEmail(normalizedEmail);

        if (!user || user.password !== password) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }

        res.json({ message: 'Login successful', user });
    } catch (error) {
        res.status(500).json({ message: 'Something went wrong', error: error.message });
    }
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}/createAcc.html`);
});
