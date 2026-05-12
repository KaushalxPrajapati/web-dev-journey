import express from 'express'; // third-party framework, abstracts raw Node.js http
const app = express(); // create express app instance
const PORT = 5000; // uppercase — convention for constants

// root route responds to GET requests on http://localhost:5000/
app.get('/', (req, res) => {
    res.send('Hello World'); // express auto-sets headers, unlike raw Node.js
});

// app.listen(port); // perfectly valid — server starts, just no confirmation message

// starts the server — must come after all routes are defined
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
