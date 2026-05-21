import express from 'express';
const app = express();
const PORT = 3000;

app.set('view engine', 'ejs');

//1
app.get('/', (req, res) => {
    res.render('home.ejs');
});

// 2
app.get('/pass/:marks', (req, res) => {
    let marks = Number(req.params.marks);
    res.render('result.ejs', { marks });
});

// 3
let posts = [
    { username: 'kaushal', content: 'Learning EJS today' },
    { username: 'rahul', content: 'Express is easy' },
    { username: 'priya', content: 'Backend is fun' },
    { username: 'amit', content: 'Building my first server' },
];

app.get('/posts', (req, res) => {
    res.render('posts.ejs', { posts });
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
