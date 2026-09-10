// Problem 13
// Given the following array:

let marks = [78, 92, 65, 88, 45, 76];

// 1. Check whether SOME student scored less than 50.
// 2. Check whether EVERY student scored at least 40.
//
// Store the results in:
// `hasFailedStudent`
// `allPassed`
//
// Expected output:
// true
// true
//
// Use some() and every().

const hasFailedStudent = marks.some((num) => num < 50);
console.log(hasFailedStudent);

const allPassed = marks.every((num) => num >= 40);
console.log(allPassed);
