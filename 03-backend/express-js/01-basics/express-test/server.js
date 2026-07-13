// ------------------------------------------------
// PART 1: IMPORT THE TOOLS WE NEED
// ------------------------------------------------

// This gives us access to the Express library.
// We require it and store it in a variable called 'express'.
const express = require('express');

// This gives us access to the 'path' library.
// The 'path' library helps us combine folder names together
// so they work on any computer (Windows, Mac, Linux).
const path = require('path');

// This creates our actual Express application.
// We store it in a variable called 'app'.
// All of our settings and routes will go on this 'app' object.
const app = express();

// We store our port number in a variable so we can easily change it later if needed.
const PORT = 3000;

// ------------------------------------------------
// PART 2: TELL EXPRESS WHERE OUR TEMPLATES ARE (app.set)
// ------------------------------------------------

// We want to tell Express: "All my template files (.ejs) are inside a folder called 'views'."
//
// We directly tell Express to use the 'views' folder by combining __dirname and 'views'
// using path.join(). This creates the full absolute path to the folder.
// app.set() takes 2 arguments:
// 1. The setting name (as a string). Here we use 'views'.
// 2. The value we want to set it to. Here we use the folder path we just built.
app.set('views', path.join(__dirname, 'views'));

// Now we tell Express: "When I say res.render(), use the 'ejs' template engine to process the files."
// app.set() again takes 2 arguments:
// 1. The setting name (as a string). Here we use 'view engine'.
// 2. The value we want to set it to. Here we use the string 'ejs'.
app.set('view engine', 'ejs');

// ------------------------------------------------
// PART 3: SERVE STATIC FILES (app.use + express.static)
// ------------------------------------------------

// We want to tell Express: "If the browser asks for a file (like style.css or image.png),
// look inside the 'public' folder to find it."
//
// app.use() adds a "middleware" function.
// express.static() is a built-in Express function that serves files from a folder.
// We give it the path to our public folder as an argument.
app.use(express.static(path.join(__dirname, 'public')));

// ------------------------------------------------
// PART 4: MIDDLEWARE TO READ DATA FROM REQUESTS (app.use)
// ------------------------------------------------

// MIDDLEWARE 1: Read JSON data from incoming requests.
//               When a client sends us data in JSON format (like {"name":"John"}),
//               this middleware will read it, turn it into a JavaScript object,
//               and attach it to 'req.body' so we can use it.
//               express.json() takes 0 arguments here (just empty parentheses).
app.use(express.json());

// MIDDLEWARE 2: Read data from HTML forms (URL-encoded data).
//                When a user submits a traditional HTML form (like a login form),
//                this middleware will decode the form data, turn it into a JavaScript object,
//                and attach it to 'req.body' so we can use it.
//                express.urlencoded() takes 1 argument: an options object.
//                We pass { extended: true } which allows nested objects in the form data.
app.use(express.urlencoded({ extended: true }));

// ------------------------------------------------
// PART 5: CREATE OUR ROUTES (The actual website logic)
// ------------------------------------------------

// ROUTE 1: The Homepage (GET request to "/")
//          When someone visits http://localhost:3000 in their browser,
//          this code will run.
app.get('/', (req, res) => {
    // We want to send back a webpage (not plain text or JSON).
    // res.render() does 2 things:
    // 1. It looks inside the 'views' folder (which we set earlier).
    // 2. It finds a file called 'index.ejs' and uses the EJS engine to process it.
    //
    // The second argument is an object containing data we want to inject into the EJS template.
    // Inside the index.ejs file, we can use <%= title %> and <%= name %> to print these values.
    res.render('index.ejs', {
        title: 'Express Test',
        name: 'Friend',
    });
});

// ROUTE 2: Handle JSON data (POST request to "/test-json")
//          This is used to test the 'express.json()' middleware.
//          When someone sends a POST request with JSON data to this URL,
//          this code will run.
//
//          The JSON data they sent is automatically available inside 'req.body'
//          because of the middleware we set up earlier.
//          We send back a confirmation message along with the data they sent.
app.post('/test-json', (req, res) => {
    res.json({
        message: 'JSON worked!',
        data: req.body,
    });
});

// ROUTE 3: Handle HTML Form data (POST request to "/test-form")
//          This is used to test the 'express.urlencoded()' middleware.
//          When someone submits the form on our homepage to this URL,
//          this code will run.
//
//          The form data they submitted is automatically available inside 'req.body'
//          because of the middleware we set up earlier.
//          Instead of sending back raw JSON, we render a nice "Thank You" webpage.
//          We pass the username to the thank-you page so it can say their name.
app.post('/test-form', (req, res) => {
    res.render('thank-you', {
        username: req.body.username,
    });
});

// ------------------------------------------------
// PART 6: CATCH WRONG URLS (404 Page Not Found)
// ------------------------------------------------

// This is a special route that runs ONLY if none of the routes above matched.
// For example, if someone visits http://localhost:3000/anything-here
// this code will run and show them a friendly error message instead of a blank screen.
app.use((req, res) => {
    // We set the status code to 404 which means "Page Not Found".
    res.status(404);

    // We send back a simple HTML message so the user knows they typed a wrong URL.
    // We also give them a link to go back to the homepage.
    res.send(`
        <h1>😕 Oops! Page Not Found</h1>
        <p>The URL <strong>${req.url}</strong> does not exist on this server.</p>
        <a href="/">Click here to go back home</a>
    `);
});

// ------------------------------------------------
// PART 7: START THE SERVER (app.listen)
// ------------------------------------------------

// This is the final step. We tell our app to start listening for incoming
// internet traffic on our specified PORT (which is 3000).
//
// app.listen() takes 2 arguments:
// 1. The port number (as a number). Here we use the PORT variable.
// 2. A callback function that runs once the server has successfully started.
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
