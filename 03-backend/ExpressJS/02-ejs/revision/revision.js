const express = require('express');
const app = express();
const port = 3000;

// Root
app.get('/', (req, res) => {
    res.send('Welcome to Express.js Routing Example');
});

// Route/Path Parameters
app.get('/:users/:id', (req, res) => {
    const userName = req.params.users;
    const userId = req.params.id;

    res.send(`<h1>Welcome ${userName}, Your user id is: ${userId} </h1>`);
});

// Query Parameter
app.get('/search', (req, res) => {
    const name = req.query.name;
    const city = req.query.city;

    res.send(`
        <div>
            <h1> Here are the results for your search... </h1>
            Name: ${name}

            <br>

            City: ${city}
        </div>`);
});

app.get('/:user', (req, res) => {
    let user = req.params.user;
    const followers = ['Aarav', 'Riya', 'Kabir', 'Ananya', 'Vivaan', 'Aditya', 'Meera', 'Rahul', 'Priya'];
    res.render('ig.ejs', { user, followers });
});

// Start Server
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
