const express = require('express');
const app = express();
const PORT = 3000;

// Custom middleware, it will run on EVERY single incoming request
app.use((req, res, next) => {
    console.log(`Request method: ${req.method}`); // logs: GET /products
    next(); // pass control forward
});

app.use((req, res, next) => {
    console.log(`Request url: ${req.url}`);
    next(); // pass control forward
});

app.get('/', (req, res) => {
    res.send('I am root, Standard GET Request');
});

app.listen(PORT, () => {
    console.log(`server running on http://localhost:${PORT}`);
});
