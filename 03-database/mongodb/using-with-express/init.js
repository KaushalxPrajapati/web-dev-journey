const mongoose = require('mongoose');
const Chat = require('./models/chat.js');

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
}

main()
    .then(async () => {
        console.log('Connection Successful');
    })
    .catch((err) => {
        console.log('Connection Unsuccessful:', err);
    });

// ------------------------------------------------------------------
// Initial sample chat records
// ------------------------------------------------------------------

let allChats = [
    {
        from: 'Kaushal',
        to: 'Mr. K',
        msg: 'Are you ready?',
        created_at: new Date(),
    },
    {
        from: 'Sneha',
        to: 'Priya',
        msg: 'Hey, how are you?',
        created_at: new Date(),
    },
    {
        from: 'Arjun',
        to: 'Rahul',
        msg: 'Did you complete the assignment?',
        created_at: new Date(),
    },
    {
        from: 'Pooja',
        to: 'Divya',
        msg: "Let's meet tomorrow at coffee shop",
        created_at: new Date(),
    },
    {
        from: 'Vikram',
        to: 'Nikhil',
        msg: "I'll be there in 10 minutes",
        created_at: new Date(),
    },
    {
        from: 'Ishita',
        to: 'Ananya',
        msg: 'Did you see the new movie?',
        created_at: new Date(),
    },
    {
        from: 'Rohan',
        to: 'Kunal',
        msg: 'Code review for the PR please',
        created_at: new Date(),
    },
    {
        from: 'Tanvi',
        to: 'Megha',
        msg: 'Thanks for helping yesterday!',
        created_at: new Date(),
    },
    {
        from: 'Harsh',
        to: 'Varun',
        msg: 'Game tonight at 8?',
        created_at: new Date(),
    },
    {
        from: 'Riya',
        to: 'Simran',
        msg: 'Send me the notes from class',
        created_at: new Date(),
    },
];

Chat.insertMany(allChats);
