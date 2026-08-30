const express = require('express');

const app = express();
const PORT = 3000;

// Middleware must be above routes
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

let users = [{ id: 1, name: 'Ganesh', email: 'ganesh@gmail.com' }];

// GET Method
app.get('/users', (req, res) => {
    res.json(users);
});

// POST Method
app.post('/users', (req, res) => {
    console.log(req.body);

    if (!req.body) {
        return res.status(400).json({
            message: 'Request body is missing',
        });
    }

    const name = req.body.name;
    const email = req.body.email;

    if (!name || !email) {
        return res.status(400).json({
            message: 'Name and email are required',
        });
    }

    const newUser = {
        id: users.length + 1,
        name: name,
        email: email,
    };

    users.push(newUser);

    res.status(201).json({
        message: 'User added successfully',
        user: newUser,
    });
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
