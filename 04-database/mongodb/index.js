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

// Create schema (blueprint for documents)
const userSchema = new mongoose.Schema({
    name: String, // String data type
    email: String, // String data type
    age: Number, // Number data type
});

// Create model from schema (Model name: User, collection: users)
// Note: Mongoose auto-pluralizes 'User' → 'users' collection in MongoDB
const User = mongoose.model('User', userSchema);

// Create first user document (not saved yet, just in memory)
const user1 = new User({
    name: 'John Doe',
    email: 'john.doe@example.com',
    age: 30,
});

// Create second user document (not saved yet)
const user2 = new User({
    name: 'Adam Smith',
    email: 'adam.smith@example.com', // Lowercase 'a' for consistency
    age: 30,
});

// Save user1 to MongoDB (async operation)
// user1.save().then(() => console.log('User saved!'));

// Save user2 to MongoDB (async operation)
// user2.save().then(() => console.log('User saved!'));

// Now using insertMany() method
User.insertMany([
    { name: 'Tony', email: 'tony@example.com', age: 50 },
    { name: 'Bruce', email: 'bruce@example.com', age: 40 },
    { name: 'Peter', email: 'peter@example.com', age: 24 },
])
    .then((data) => {
        console.log(data);
    })
    .catch((err) => {
        console.log(err);
    });
