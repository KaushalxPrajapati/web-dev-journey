const mongoose = require('mongoose');

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/practice');
}

main()
    .then(() => {
        console.log('Connected to MongoDB!');
    })

    .catch((err) => {
        console.log(err);
    });

// Make schema
const studentSchema = new mongoose.Schema({
    name: String,
    city: String,
    age: Number,
});

// Make Model

const Student = mongoose.model('student', studentSchema);

// ----------------------------------------------------------------------

// Now you can insert, find, update, or delete
