// SHOPKARO - MOCK E-COMMERCE API
// ==============================
// A practice Express.js server built while learning Backend Development
// from Sigma 8.0 by Apna College (Section 35 - Backend 2: Node + Express).
//
// PURPOSE:
// This project demonstrates core Express.js concepts:
//   - Setting up an Express server
//   - Defining GET routes
//   - Using path parameters (req.params) to identify specific resources
//   - Using query strings (req.query) to filter/search data
//
// HOW TO RUN:
//   nodemon index.js
//
// AVAILABLE ROUTES:
//   GET /                                        → Home page
//   GET /products                                → All products
//   GET /products/:id                            → Single product by ID
//   GET /search?city=&category=&maxprice=        → Search with filters

import express from 'express';

// express() creates an Express application instance.
// This 'app' object is the core of your server —
// you define routes on it and it handles all incoming requests.
const app = express();

// app.listen(port, callback)
// Starts the server and makes it listen for incoming HTTP requests on the specified port.
// Port 3000 is a convention for local development.
// In production, this usually comes from environment variables: process.env.PORT
// The callback runs once the server is successfully started.
app.listen(3000, () => {
    console.log(`App is listening on port 3000`);
});

// ROUTING
// app.get(path, callback) defines a GET route.
// req = request object  → contains info about what the client sent
// res = response object → used to send something back to the client
// Every URL the user visits triggers the matching route's callback.

// Home route — responds when user hits the base URL
app.get('/', (req, res) => {
    res.send('Welcome to ShopKaro');
});

// Products route — returns all products (in real apps, you'd fetch from a DB here)
app.get('/products', (req, res) => {
    res.send('Showing all products');
});

// PATH PARAMETERS — req.params
// ':id' is a dynamic segment in the URL path.
// Whatever value the user puts there is captured in req.params.id
// Example:
//   GET /products/42   → req.params.id = '42'
//   GET /products/99   → req.params.id = '99'
// Use params to identify a SPECIFIC resource.
app.get('/products/:id', (req, res) => {
    res.send(`Showing product with id: ${req.params.id}`);

    // OR

    // productsId = req.params.id;
    // res.send(`Showing product with id: ${productsId}`);
});

// QUERY STRINGS — req.query
// Query strings come after '?' in the URL as key=value pairs.
// Multiple query params are separated by '&'
// Example URL:
//   GET /search?city=Mumbai&category=shoes&maxprice=500
//   req.query.city      = 'Mumbai'
//   req.query.category  = 'shoes'
//   req.query.maxprice  = '500'
// Use query strings for FILTERING or SEARCHING, not identifying a specific resource.
// Key difference from params:
//   params → /products/:id    → identifies WHICH product
//   query  → /search?category → filters/searches products
app.get('/search', (req, res) => {
    res.send(`Searching for ${req.query.category} under ${req.query.maxprice} in ${req.query.city}`);
});
