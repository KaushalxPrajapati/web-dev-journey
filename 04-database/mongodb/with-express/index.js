const express = require('express');
const app = express(); 
const mongoose = require('mongoose');
const path = require('path');

// Use middleware for static files
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ✅ CORRECT - Set application settings
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
    console.log('Connected to MongoDB');
}

main().then(() => console.log('MongoDB connected successfully')).catch;

const PORT = 8080;

app.get('/', (req, res) => {
    res.send('Root is working');
});

// Use app.listen() to start the server.
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
