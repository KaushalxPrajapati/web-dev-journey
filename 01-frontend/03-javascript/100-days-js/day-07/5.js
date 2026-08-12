/*
=============================================================================
Problem 6: Simple Grade Calculator

Create a function called `getGrade` that takes a student's marks.

Return:

- "A" if marks are 90 or above.
- "B" if marks are 80 or above.
- "C" if marks are 70 or above.
- "D" if marks are 60 or above.
- "F" if marks are below 60.

Test your function with different marks.
=============================================================================
*/

function getGrade(marks) {
    if (marks >= 90) {
        return 'A';
    } else if (marks >= 80) {
        return 'B';
    } else if (marks >= 70) {
        return 'C';
    } else if (marks >= 60) {
        return 'D';
    } else {
        return 'F';
    }
}

console.log(getGrade(0));
console.log(getGrade(99));
console.log(getGrade(90));
console.log(getGrade(85));
console.log(getGrade(80));
console.log(getGrade(75));
console.log(getGrade(100));
