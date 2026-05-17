import express from 'express';
const app = express();
const port = 3000;

app.listen(port, () => {
    console.log(`App is listening on port ${port}`);
});

app.set('view engine', 'ejs');

app.get('/ig/:username', (req, res) => {
    let followers = ['Adam', 'Eve', 'Rahul', 'Amit', 'Neha'];
    let { username } = req.params;
    res.render('instagram.ejs', { username, followers });
});
