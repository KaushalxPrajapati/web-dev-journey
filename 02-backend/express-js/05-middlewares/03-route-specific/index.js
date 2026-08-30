const express = require('express');
const app = express();
const PORT = 3000;

// Custom middleware, it will run on EVERY single incoming request
app.use((req, res, next) => {
    console.log(`Request method: ${req.method}`); // logs: GET /products
    next(); // pass control forward
});

const checkAdmin = (req, res, next) => {
    const role = req.headers['x-role']; // check role from header
    if (role === 'admin') {
        next(); // authorized — continue
    } else {
        res.status(403).send('Access denied'); // blocked
    }
};

// Only this route uses checkAdmin
app.delete('/products/:id', checkAdmin, (req, res) => {
    res.send(`Product ${req.params.id} deleted`);
});
