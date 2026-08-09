const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        lowercase: true,
        trim: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
        minLength: 8,
    },
    role: {
        type: String,
        enum: ['user', 'admin'],
        default: 'user',
    },
});

const User = mongoose.model('User', userSchema);

// You're using this syntax because it's commanjs module system, not ES6 module system otherwise we'd have used export const userSchema
module.exports = User;
