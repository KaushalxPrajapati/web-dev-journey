// -------------------------------------------
// 1. Working with Simple Arrays (Lists of Numbers)
// -------------------------------------------

let array = [1, 2, 3, 4, 5];

let double = array.map((num) => {
    return num * 2; // Returns a NEW array with every element doubled
});

let square = array.map((num) => {
    return num ** 2; // Returns a NEW array with every element squared
});

console.log('Double of array:', double);
console.log('Square of array:', square);

console.log(''); // Empty line for readability

// -------------------------------------------------
// 2. Working with Objects and using .map() method
// -------------------------------------------------

let studentInfo = [
    {
        name: 'Student 1',
        age: 20,
        marks: 99,
    },
    {
        name: 'Student 2',
        age: 19,
        marks: 76,
    },
    {
        name: 'Student 3',
        age: 19,
        marks: 85,
    },
];

// We map over 'GPA' to create a NEW array of objects containing only what we need.
let GPA = studentInfo.map((student) => {
    return {
        name: student.name,
        gpa: student.marks / 10,
    };
});
// Now 'studentGPAs' looks like:
// [{ name: "Student 1", gpa: 9.9 }, { name: "Student 2", gpa: 7.6 }...]

console.log('--- FINAL REPORT ---');

// Never use .map() just to PRINT (Log) data.
// Why? .map() is "expensive" because it creates and returns a new array in memory.
// .forEach() is "cheap" because it just loops and returns nothing.

// ---------------------------------------------------------
// Printing (forEach vs map)
// ---------------------------------------------------------
// RULE: Use .map() when you want to CREATE data.
// RULE: Use .forEach() when you just want to print something or Log data on console.

GPA.forEach((student) => {
    console.log(`GPA of ${student.name} is: ${student.gpa}`);
});
