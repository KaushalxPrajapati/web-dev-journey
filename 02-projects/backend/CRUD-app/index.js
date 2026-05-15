const express = require("express");
const path = require("path");

const app = express();

app.use(express.json());
app.use(express.static("public"));


// Dummy Database
let users = [
    { id: 1, name: "Kaushal Prajapati" },
    { id: 2, name: "Ganesh Kumar" }
];


// Serve Home Page
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "index.html"));
});


// GET All Users
app.get("/users", (req, res) => {
    res.json(users);
});


// ADD New User
app.post("/users", (req, res) => {

    const newUser = {
        id: users.length + 1,
        name: req.body.name
    };

    users.push(newUser);

    res.json({
        message: "User Added Successfully",
        user: newUser
    });
});


// UPDATE User by ID
app.put("/users/:id", (req, res) => {

    const id = parseInt(req.params.id);

    const user = users.find(u => u.id === id);

    if (!user) {
        return res.status(404).json({
            message: "User Not Found"
        });
    }

    user.name = req.body.name;

    res.json({
        message: "User Updated Successfully",
        user
    });
});


// DELETE User by ID
app.delete("/users/:id", (req, res) => {

    const id = parseInt(req.params.id);

    const userExists = users.find(u => u.id === id);

    if (!userExists) {
        return res.status(404).json({
            message: "User Not Found"
        });
    }

    users = users.filter(u => u.id !== id);

    res.json({
        message: "User Deleted Successfully"
    });
});


// Start Server
app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});
