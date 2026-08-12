/*
=============================================================================
Problem 15: Even or Odd

Create a variable called `num`.

Use an `if...else` statement to check whether the number is even or odd.

Print:
- "Even" if the number is divisible by 2.
- "Odd" otherwise.
=============================================================================
*/

function evenOrOdd(num) {
    if (num % 2 === 0) {
        return 'Even';
    } else {
        return 'Odd';
    }
}

let num = 0;
console.log(evenOrOdd(num));
