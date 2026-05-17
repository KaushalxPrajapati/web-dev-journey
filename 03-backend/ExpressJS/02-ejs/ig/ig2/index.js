import express from 'express';
import data from './data.json' with { type: 'json' };

const app = express();
const port = 3000;

app.listen(port, () => {
    console.log(`App is listening on the PORT: ${port}`);
});

app.set('view engine', 'ejs');

app.get('/ig/:username', (req, res) => {
    let { username } = req.params; // Destructuring
    let user = data[username];

    if (user) {
        res.render('instagram.ejs', { user });
    } else {
        res.render('error.ejs');
    }
});

app.use(express.static('public'));
