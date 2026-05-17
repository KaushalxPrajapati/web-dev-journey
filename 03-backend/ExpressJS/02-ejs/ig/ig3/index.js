import express from 'express';
const app = express();
const port = 3000;

// Starts the server on port 3000 — always runs first before any route is hit
app.listen(port, () => {
    console.log(`App is listening on PORT: ${port}`);
});

// Tells Express to use EJS as the templating engine
// After this, res.render() automatically looks for .ejs files inside the /views folder
app.set('view engine', 'ejs');

app.get('/ig/:username', (req, res) => {
    // req.params is an object — { username: 'kaushal' }
    // :username in the route becomes a key in req.params

    // 1st way — dot notation
    // req.params.username directly gives the value as a string
    let username = req.params.username;

    // 2nd way — destructuring with rename
    // { username: naam } means: find key 'username' in req.params, store its value in variable 'naam'
    // 'username' = key to look for, 'naam' = new variable name
    let { username: naam } = req.params;

    // A plain object being passed to EJS
    // Once passed to res.render, access in EJS as: obj.user or obj.salary
    let obj = {
        user: 'Kaushal',
        salary: '$' + 100000,
    };

    // res.render(templateFile, dataObject)
    // 2nd argument must always be an object — EJS reads variable names from its keys
    // { username: username } and { username } are identical — shorthand when key and variable name match
    // After this line, username, naam, obj are all available as variables inside example.ejs
    res.render('example.ejs', { username, naam, obj });
});
