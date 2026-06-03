let array = [1, 2, 3, 4, 5];

// Method: 1
// Storing the function in the variable 'print' then passing it as argument inside in .forEach() method
let print = function (i) {
    console.log(i);
};
console.log('Method 1:');
array.forEach(print);

console.log('---------------------');

// Method: 2
// Passing directly the function
console.log('Method 2:');
array.forEach(function (i) {
    console.log(i);
});

console.log('---------------------');

// Method: 3
// Passing arrow function
console.log('Method 3:');
array.forEach((i) => {
    console.log(i);
});

console.log('---------------------');

// Method: 4
// Passing Arrow function *shorthand (Industry Pro level)
console.log('Method 3:');
array.forEach((i) => console.log(i));

// How to use .forEach method on objects
let studentInfo = [
    {
        name: 'Student 1',
        age: 20,
        CGPA: 9,
    },
    {
        name: 'Student 2',
        age: 19,
        CGPA: 7,
    },
    {
        name: 'Student 3',
        age: 19,
        CGPA: 8,
    },
];

studentInfo.forEach((studentInfo) => {
    console.log('Name:', studentInfo.name);
    console.log('Age:', studentInfo.age);
    console.log('CGPA:', studentInfo.CGPA);
});
