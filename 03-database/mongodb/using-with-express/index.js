const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const methodOverride = require("method-override");

const Chat = require("./models/chat.js");

const PORT = 8080;

// --------------------------------------------------
// Application Settings
// --------------------------------------------------

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// --------------------------------------------------
// Middleware
// --------------------------------------------------

app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));

// --------------------------------------------------
// Routes
// --------------------------------------------------

// Root Route
app.get("/", (req, res) => {
    res.send("Root is working");
});

// Index Route
app.get("/chats", async (req, res) => {
    let chats = await Chat.find();
    res.render("index.ejs", { chats });
});

// New Route
app.get("/chats/new", (req, res) => {
    res.render("new.ejs");
});

// Create Route
app.post("/chats", async (req, res) => {
    let { from, to, msg } = req.body;

    let newChat = new Chat({
        from,
        to,
        msg,
        created_at: new Date(),
    });

    try {
        await newChat.save();

        console.log("Chat created successfully");
        res.redirect("/chats");
    } catch (err) {
        console.log("Error creating chat:", err);
        res.status(500).send("Something went wrong");
    }
});

// Edit Route
app.get("/chats/:id/edit", async (req, res) => {
    const { id } = req.params;

    const chat = await Chat.findById(id);

    res.render("editForm.ejs", { chat });
});

// Update Route
app.put("/chats/:id", async (req, res) => {
    const { id } = req.params;
    const { msg } = req.body;

    const updatedChat = await Chat.findByIdAndUpdate(
        id,
        { msg },
        { runValidators: true, new: true },
    );

    console.log(updatedChat);

    res.redirect("/chats");
});

// Delete Route
app.delete("/chats/:id", async (req, res) => {
    const { id } = req.params;

    const deletedChat = await Chat.findByIdAndDelete(id);

    console.log(deletedChat);

    res.redirect("/chats");
});

// --------------------------------------------------
// MongoDB Connection + Server Start
// --------------------------------------------------

async function main() {
    try {
        await mongoose.connect("mongodb://127.0.0.1:27017/whatsapp");

        console.log("Connected to MongoDB successfully");

        app.listen(PORT, () => {
            console.log(`Server is running on http://localhost:${PORT}/chats`);
        });
    } catch (err) {
        console.log("MongoDB connection error:", err);
    }
}

main();
