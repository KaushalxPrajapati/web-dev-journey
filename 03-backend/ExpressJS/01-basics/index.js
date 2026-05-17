// SHOPKARO - MOCK E-COMMERCE API
// ==============================
// A beginner-friendly Express.js practice server.
//
// This project demonstrates:
// 1. Creating an Express server
// 2. Serving an HTML file from Express
// 3. Creating basic GET routes
// 4. Using route/path parameters with req.params
// 5. Using query strings with req.query
//
// HOW TO RUN:
// nodemon index.js
//
// BASE URL:
// http://localhost:5000
//
// AVAILABLE ROUTES:
// GET /                                      → Home page
// GET /products                              → Show all products
// GET /products/:id                          → Show a single product by ID
// GET /search?city=&category=&maxprice=      → Search products using filters

const express = require('express');
const path = require('path');

// express() creates an Express application.
// The app object is used to define routes and handle incoming requests.
const app = express();

// PORT is the number where our server will listen for requests.
// Example: http://localhost:5000
const PORT = 5000;

// __dirname gives the absolute path of the current folder.
// This helps us safely locate files like index.html.
console.log('Current directory:', __dirname);

// HOME ROUTE
// ----------
// When the user visits http://localhost:5000,
// Express sends the index.html file to the browser.
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// PRODUCTS ROUTE
// --------------
// This route is used to show all products.
// In a real project, products would usually come from a database.
app.get('/products', (req, res) => {
    res.send('Showing all products');
});

// SINGLE PRODUCT ROUTE
// --------------------
// :id is a route parameter.
// Whatever value comes after /products/ will be stored in req.params.id.
//
// Example:
// /products/1  → req.params.id = '1'
// /products/25 → req.params.id = '25'
app.get('/products/:id', (req, res) => {
    const productId = req.params.id;
    res.send(`Showing product with id: ${productId}`);
});

// SEARCH ROUTE
// ------------
// Query strings are used for filtering/searching data.
// Query strings come after ? in the URL.
//
// Example:
// /search?city=Mumbai&category=shoes&maxprice=500
//
// req.query will contain:
// {
//   city: 'Mumbai',
//   category: 'shoes',
//   maxprice: '500'
// }
app.get('/search', (req, res) => {
    const { city, category, maxprice } = req.query;
    res.send(`Searching for ${category} under ${maxprice} in ${city}`);
});

// 404 FALLBACK ROUTE
// ------------------
// This runs when the user visits a route that does not exist.
app.use((req, res) => {
    res.status(404).send('404 - Page not found');
});

// START SERVER
// ------------
// app.listen() starts the server.
// The callback runs once the server starts successfully.
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
