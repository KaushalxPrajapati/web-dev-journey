/*
=============================================================================
Problem 3: Number Range

Create a function called `checkRange` that takes a number.

Return:
- "Small" if the number is less than 10.
- "Medium" if the number is between 10 and 50 (inclusive).
- "Large" if the number is greater than 50.

Test the function with different values, including 10 and 50.
=============================================================================
*/

function checkRange(num) {
    if (num < 10) {
        return 'Small';
    } else if (num >= 10 && num <= 50) {
        return 'Medium';
    } else {
        return 'Large';
    }
}

console.log(checkRange(0));
console.log(checkRange(7));
console.log(checkRange(10));
console.log(checkRange(35));
console.log(checkRange(50));
console.log(checkRange(55));
