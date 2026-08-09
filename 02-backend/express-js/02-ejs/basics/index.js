const express = require('express');
const app = express();
const PORT = 3000;

// Tells Express to use EJS as the templating engine
// After this, res.render() automatically looks for .ejs files inside the /views folder
app.set('view engine', 'ejs');

app.get('/:name', (req, res) => {
    // req.params is an object — { name: 'kaushal' }
    // :name in the route becomes a key in req.params

    // 1st way — dot notation
    // req.params.name directly gives the value as a string
    let name = req.params.name;

    // 2nd way — destructuring with rename
    // { name: naam } means: find key 'name' in req.params, store its value in variable 'naam'
    // 'name' = key to look for, 'naam' = new variable name
    let { name: naam } = req.params;

    // A plain object being passed to EJS
    // Once passed to res.render as 2nd argument and an object, access in EJS file as: obj.amount
    // 3rd way - pass the object where your value are defined, and access the property using dot notation in the ejs file like obj.amount
    let obj = {
        amount: `$${Math.floor(Math.random() * 10000)}`,
    };

    name = name.charAt(0).toUpperCase() + naam.slice(1, name.length);
    naam = naam.charAt(0).toUpperCase() + naam.slice(1, naam.length);
    // res.render(templateFile, dataObject)
    // 2nd argument must always be an object — EJS reads variable names from its keys
    // { name: name } and { name } are identical — shorthand when key and variable name match
    // After this line, name, naam, obj are all available as variables inside example.ejs
    res.render('example.ejs', { name, naam, obj });
});

// Starts the server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
