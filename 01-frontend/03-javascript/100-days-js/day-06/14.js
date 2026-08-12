/*
=============================================================================
Problem 14: if...else if...else

Create a variable called `marks`.

Use `if...else if...else` to print:

- "Excellent" if marks are 90 or above.
- "Good" if marks are 70 or above.
- "Average" if marks are 50 or above.
- "Fail" if marks are below 50.

Test your code with different mark values.
=============================================================================
*/

let marks = 50;

if (marks >= 90) {
    console.log('Excellent');
} else if (marks >= 70) {
    console.log('Good');
} else if (marks >= 50) {
    console.log('Average');
} else {
    console.log('Fail');
}
