import express from 'express';
import { v4 as uuidv4 } from 'uuid';
import methodOverride from 'method-override';

const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));
app.use(methodOverride('_method'));

app.listen(port, () => {
    console.log(`App is listening on the PORT: ${port}, Go Check!`);
});

let posts = [
    { id: uuidv4(), username: 'kaushalprajapati', content: 'I love coding!' },
    { id: uuidv4(), username: 'apnacollege', content: 'We make coders!' },
    { id: uuidv4(), username: 'shradhakhapra', content: 'Hard work is important to achieve success!' },
    { id: uuidv4(), username: 'rahulkumar', content: 'I got selected for my 1st internship today!' },
];

app.set('view engine', 'ejs');

// ----------------------------------------------------

// Main page - View all posts
app.get('/posts', (req, res) => {
    res.render('index.ejs', { posts });
});

// ----------------------------------------------------

// To create new posts
app.get('/posts/new', (req, res) => {
    res.render('new.ejs');
});

app.post('/posts', (req, res) => {
    let { username, content } = req.body;
    let id = uuidv4();
    posts.push({ id, username, content });
    // posts.push(req.body);
    // console.log(posts[posts.length - 1]);
    // res.send('Post request received in the backend');
    // res.render('index.ejs', { posts });
    res.redirect('/posts');
});

// ----------------------------------------------------

app.get('/posts/:id', (req, res) => {
    let { id } = req.params;
    // console.log(id);
    let post = posts.find((i) => i.id === id);
    // console.log(post);
    // res.send('Post is accessed, check console!');
    res.render('show.ejs', { post });
});

app.patch('/posts/:id', (req, res) => {
    let id = req.params.id;
    let newContent = req.body.content;
    // console.log(id);
    // console.log(newContent);
    // res.send('Patch request working');
    let post = posts.find((i) => i.id === id);
    post.content = newContent;
    // console.log(post);
    res.redirect('/posts');
});

// ----------------------------------------------------

app.get('/posts/:id/edit', (req, res) => {
    let id = req.params.id;
    let post = posts.find((i) => i.id === id);
    res.render('update.ejs', { id, post });
});

app.delete('/posts/:id', (req, res) => {
    let id = req.params.id;
    let post = posts.find((i) => i.id === id);
    posts.splice(posts.indexOf(post), 1); // (startIndex, deleteCount)
    console.log('Post deleted!\n', post);
    res.redirect('/posts');
});
