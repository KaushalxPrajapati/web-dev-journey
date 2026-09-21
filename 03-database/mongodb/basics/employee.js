const mongoose = require('mongoose');

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/employee');
}

main()
    .then(() => {
        console.log('Connection Successful');
    })
    .catch((err) => {
        console.log(err);
    });

const employeeSchema = new mongoose.Schema({
    name: String,
    email: String,
    age: Number,
    salary: Number,
});

const Employee = mongoose.model('Employee', employeeSchema);

const emp1 = new Employee({
    name: 'Adam',
    email: 'Adam@gmail.com',
    age: 55,
    salary: 100000,
});

// emp1.save().then(() => console.log('Employee Added!'));

const emp2 = new Employee({
    name: 'Tony',
    email: 'Tony@gmail.com',
    age: 43,
    salary: 1000000,
});

// emp2.save().then(() => console.log('Employee Added!'));
