import express from 'express';
const app = express();
const port = 3000;

app.listen(port, () => {
    console.log(`App is listening on the PORT: ${port}, Go Check the browser!`);
});

let posts = [
    { username: 'kaushal', content: 'Learning EJS today' },
    { username: 'rahul', content: 'Express is easy' },
    { username: 'priya', content: 'Backend is fun' },
    { username: 'amit', content: 'Building my first server' },
];

app.set('view engine', 'ejs');

app.get('/posts', (req, res) => {
    res.render('posts.ejs', { posts });
});