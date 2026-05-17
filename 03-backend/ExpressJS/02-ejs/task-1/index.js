import express from 'express';
const app = express();
const port = 3000;

app.listen(port, () => {
    console.log(`App is listening on the PORT: ${port}, Go Check!`);
});

app.set('view engine', 'ejs');

app.get('/user/:name', (req, res) => {
    let userName = req.params.name;
    res.render('profile.ejs', { userName });
});
