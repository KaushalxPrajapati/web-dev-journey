import express from 'express';
const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.listen(port, () => {
    console.log(`App is listening on the PORT: ${port}, Go Check!`);
});

// Handle the form submission on GET /submit
app.get('/submit', (req, res) => {
    let { name } = req.query;
    res.send(`Your GET request has been received. Welcome ${name}`);

    console.log('GET REQUEST Received!');
    console.log(req.query);
});

// Handle the form submission on POST /submit
app.post('/submit', (req, res) => {
    // Method 1 to extract the data from req.body
    // let name = req.body.name;
    // let password = req.body.password;

    // Method 2 to extract the data from req.body (destructuring)
    // let { name, password } = req.body; // POST data lives in req.body, not req.params or req.query

    let { name } = req.body;
    res.send(`Your POST request has been received. Welcome ${name}`);

    console.log('POST REQUEST Received!');
    console.log(req.body);
});
