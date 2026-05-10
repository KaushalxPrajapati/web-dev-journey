// Using require
const https = require('https');

const PORT = 3000;
const server = https.createServer((req, res) => {
    // Handle different routes
    if (req.url === '/') {
        res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
        res.end(
            '<h1>Welcome to the Secure Server</h1><p>Your connection is encrypted!</p>'
        );
    }
});

server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});

// Not working!
