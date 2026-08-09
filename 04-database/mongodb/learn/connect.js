// Import mongoose module (ODM for MongoDB)
const mongoose = require('mongoose');

// Define async function for database connection
async function main() {
    // Connect to MongoDB at localhost:27017, database name: test
    await mongoose.connect('mongodb://127.0.0.1:27017/test');
}

// Call main() and handle success/error
main()
    .then(() => {
        // Executed if connection successful
        console.log('Connected to MongoDB!');
    })

    .catch((err) => {
        // Executed if connection fails
        console.log(err);
    });
