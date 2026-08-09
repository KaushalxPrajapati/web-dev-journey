# Express.js Server Setup & Routing

Express.js is a minimal and flexible Node.js web application framework providing a robust set of features for web and mobile applications.

---

## 1. Basic Server Setup

```javascript
const express = require('express');
const app = express();
const PORT = 3000;

// Built-in Middleware for parsing JSON & URL-encoded request bodies
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Basic GET route handler
app.get('/', (req, res) => {
    res.send('Welcome to Express Server!');
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
```

---

## 2. RESTful Routing & HTTP Methods

```javascript
// GET: Retrieve resource data
app.get('/api/users', (req, res) => {
    res.json([{ id: 1, name: 'Kaushal' }]);
});

// POST: Create new resource
app.post('/api/users', (req, res) => {
    const newUser = req.body;
    res.status(201).json({ message: 'User created', user: newUser });
});

// Route Parameters (`req.params`)
app.get('/api/users/:id', (req, res) => {
    const userId = req.params.id;
    res.json({ id: userId, name: 'User Details' });
});
```

---

## 3. Middleware Concept

Middleware functions execute during the request-response cycle and have access to `req`, `res`, and `next`.

```javascript
// Custom Logging Middleware
const logger = (req, res, next) => {
    console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
    next(); // Pass control to the next handler
};

app.use(logger);
```

---

## 4. EJS Templating Integration

```javascript
// Set EJS as View Engine
app.set('view engine', 'ejs');

app.get('/home', (req, res) => {
    res.render('home', { username: 'Kaushal' });
});
```
