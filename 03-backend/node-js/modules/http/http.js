// import http from 'http'; // built-in Node.js module, no install needed
const http = require('http'); // built-in Node.js module, no install needed
const PORT = 5000;

// create server — runs on every incoming request
const server = http.createServer((req, res) => {
    // res.writeHead(200, { 'Content-Type': 'text/html' }); // 200 = OK, sending html
    // res.writeHead(200, { 'Content-Type': 'text/plain' }); // 200 = OK, sending plain text
    // res.end('Hello World'); // send response and close connection

    console.log(`Request received: ${req.method} ${req.url}`);

    // ==========================================
    // HOME ROUTE
    // ==========================================

    if (req.url === '/') {
        // 200 = OK
        // text/plain = sending plain text response

        res.writeHead(200, { 'Content-Type': 'text/html' });

        // Send response and close connection
        res.end('<h1>Welcome to the Home Page</h1>');
    }

    // ==========================================
    // ABOUT ROUTE
    // ==========================================
    else if (req.url === '/about') {
        res.writeHead(200, { 'Content-Type': 'text/html' });

        res.end('<h1>This is the About Page</h1>');
    }
});

// bind server to PORT and start listening for requests
server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
