import express from 'express';
const app = express();
const PORT = 3000;

app.set('view engine', 'ejs');

app.get('/user/:name', (req, res) => {
    let userName = req.params.name;
    res.render('profile.ejs', { userName });
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
