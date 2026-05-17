import express from 'express';
const app = express();
const port = 3000;

app.listen(port, () => {
    console.log(`App is listening on the PORT: ${port}, Go Check the browser!`);
});

app.set('view engine', 'ejs');

app.get('/pass/:marks', (req, res) => {
    let marks = Number(req.params.marks);
    res.render('result.ejs', { marks });
});
