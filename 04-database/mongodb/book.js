const mongoose = require('mongoose');

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/amazon');
}

main()
    .then(() => {
        // Executed if connection successful
        console.log('Connected to MongoDB!');
    })
    .catch((err) => {
        // Executed if connection fails
        console.log(err);
    });

const bookSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true, // Non-empty string is required
        minLength: 5, // Minimum length of 5 characters
        maxLength: 100, // Maximum length of 100 characters
        trim: true, // Trims leading/trailing whitespace
    },
    author: {
        type: String,
    },

    price: {
        type: Number,
        required: true, // Non-empty number is required
        min: 0, // Minimum value of 0
    },

    discount: {
        type: Number,
        default: 0,
    },
});

// Create model from schema (Model name: Book, collection: books)
const Book = mongoose.model('Book', bookSchema);
// console.log(typeof Book); // This will be a constructor 'function'

// Use Book as constructor
const book1 = new Book({
    title: 'MongoDB Guide',
    author: 'Kaushal',
    price: 499,
});

book1
    .save()
    .then((data) => {
        console.log('Book saved successfully!');
        console.log(data); // Output the saved book data;
    })
    .catch((err) => {
        console.log(err);
    });

Book.find({ title: 'MongoDB Guide' })
    .then((resultBook) => {
        console.log(resultBook);
    })
    .catch((err) => {
        console.log(err);
    });
