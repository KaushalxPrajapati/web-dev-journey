const express = require('express');
// 'express' stores the Express module.
// In Express, require('express') returns a function.

// console.log(typeof express);
// Output: function

const PORT = 5000; // uppercase — convention for constants

const app = express();
// This creates an Express application.
// This 'app' is an object/function hybrid and contains methods like get(), post(), use(), listen(), etc.

// console.dir(app);
// Display the properties and methods available inside the Express application.

app.get('/', (req, res) => {
    res.send('Hello World'); // express auto-sets headers, unlike raw Node.js
});

app.get('/about', (req, res) => {
    res.send('This is the about page.'); // express auto-sets headers, unlike raw Node.js
});

// starts the server — must come after all routes are defined
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
