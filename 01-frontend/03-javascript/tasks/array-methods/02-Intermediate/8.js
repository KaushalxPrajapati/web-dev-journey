// Problem 16
// Given the following array:

let students = [
    { name: 'Aman', marks: 85 },
    { name: 'Riya', marks: 42 },
    { name: 'Karan', marks: 76 },
    { name: 'Neha', marks: 31 },
    { name: 'Rahul', marks: 90 },
];

// Use filter() and map() to create a NEW array
// containing the names of students who scored 50 or more.
//
// Expected output:
// ["Aman", "Karan", "Rahul"]
//
// Store the result in:
// `passedStudents`

const passedStudents = [];
students.filter((student) => {
    if (student.marks >= 50) {
        passedStudents.push(student.name);
    }
});
console.log(passedStudents);
