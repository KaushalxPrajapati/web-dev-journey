const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

// Import your data
const data = require('./data.json');

// 1. Set the view engine to EJS
app.set('view engine', 'ejs');

// 2. Set the directory for view template files
app.set('views', path.join(__dirname, 'views'));

// 3. Built-in middleware to serve static assets
app.use(express.static(path.join(__dirname, 'public')));

app.get('/ig/:username', (req, res) => {
    let { username } = req.params;
    let user = data[username];

    if (user) {
        // Express will automatically look in the 'views' folder
        res.render('instagram.ejs', { user });
    } else {
        res.render('error.ejs');
    }
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}/ig/cats`);
    console.log(`Server running on http://localhost:${PORT}/ig/dogs`);
});
