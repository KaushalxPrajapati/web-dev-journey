import express from 'express';
const app = express();
const port = 3000;

app.listen(port, () => {
    console.log(`App is listening on port ${port}`);
});

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('home.ejs');
});
