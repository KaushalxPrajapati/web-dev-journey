import express from 'express';
const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Handle the form submission on GET /submit
app.get('/submit', (req, res) => {
    // Will show in Frontend:
    let { name } = req.query; // For GET request, the data is sent in the query string, so we can access it via req.query
    res.send(`Your GET request has been received. Welcome ${name}`);

    // Will show in Backend console log:
    console.log('GET REQUEST Received From Frontend!');
    console.log(req.query);
});

// Handle the form submission on POST /submit
app.post('/submit', (req, res) => {
    // Method 1 to extract the data from req.body
    // let name = req.body.name;
    // let password = req.body.password;

    // Method 2 to extract the data from req.body by destructuring, which is more concise and cleaner:
    // let { name, password } = req.body; // POST data lives in req.body, not req.params or req.query

    // Will show in Frontend:
    let { name } = req.body;
    res.send(`Your POST request has been received. Welcome ${name}`);

    // Will show in Backend console log:
    console.log('POST REQUEST Received From Frontend!');
    console.log(req.body);
});

app.listen(port, () => {
    console.log(`Server running at PORT:${port}, Go Check form.html and open with live server`);
});
