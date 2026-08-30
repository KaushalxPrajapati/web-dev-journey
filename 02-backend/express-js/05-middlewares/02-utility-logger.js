const express = require('express');

const app = express();
const port = 3000;

// Middleware: Runs for every incoming request
app.use((req, res, next) => {
    const now = new Date();

    console.log('-----------------------------');
    console.log(`Time: ${now.toLocaleString()}`);
    console.log(`Method: ${req.method}`);
    console.log(`Hostname: ${req.hostname}`);
    console.log(`URL: ${req.url}`);
    console.log(`Original URL: ${req.originalUrl}`);
    console.log(`Path: ${req.path}`);
    console.log(`Protocol: ${req.protocol}`);
    console.log(`IP Address: ${req.ip}`);
    console.log(`Query Params:`, req.query);
    console.log(`Route Params:`, req.params);
    console.log('-----------------------------');

    next();
});

// Root route
app.get('/', (req, res) => {
    res.send('Hi, I am ROOT PATH');
});

// Time route
app.get('/time', (req, res) => {
    const now = new Date();

    const currentTime = now.toLocaleTimeString();
    const currentDate = now.toLocaleDateString();
    const fullDateTime = now.toLocaleString();

    res.send(`
        <h1>Current Date and Time</h1>
        <p><strong>Date:</strong> ${currentDate}</p>
        <p><strong>Time:</strong> ${currentTime}</p>
        <p><strong>Full Date & Time:</strong> ${fullDateTime}</p>
    `);
});

// Example route with params
app.get('/user/:id', (req, res) => {
    console.log('User ID:', req.params.id);

    res.send(`User ID is ${req.params.id}`);
});

// Example route with query strings
// Try: http://localhost:3000/search?city=Jamshedpur&category=mobile
app.get('/search', (req, res) => {
    console.log('Search Query:', req.query);

    res.send(`
        <h1>Search Page</h1>
        <p>City: ${req.query.city || 'Not provided'}</p>
        <p>Category: ${req.query.category || 'Not provided'}</p>
    `);
});

// Starts the server
app.listen(port, () => {
    console.log(`Server is listening, check http://localhost:${port}`);
});
