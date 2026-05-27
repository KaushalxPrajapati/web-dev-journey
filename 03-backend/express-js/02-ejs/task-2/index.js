import express from 'express';
const app = express();
const PORT = 3000;

app.set('view engine', 'ejs');

app.get('/pass/:marks', (req, res) => {
    let marks = Number(req.params.marks);
    res.render('result.ejs', { marks });
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
