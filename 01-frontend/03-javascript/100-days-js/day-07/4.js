/*
=============================================================================
Problem 5: Check Divisibility

Create a function called `checkDivisibility` that takes a number.

Return:

- "Divisible by both 3 and 5" if the number is divisible by both.
- "Divisible only by 3" if it is divisible by 3 but not 5.
- "Divisible only by 5" if it is divisible by 5 but not 3.
- "Not divisible by 3 or 5" otherwise.

Test your function with different numbers.
=============================================================================
*/

function checkDivisibility(num) {
    if (num % 3 === 0 && num % 5 === 0) {
        console.log('Divisble by 3 and 5');
    } else if (num % 3 === 0) {
        console.log('Divsible by 3 only!');
    } else if (num % 5 === 0) {
        console.log('Divisible by 5 only!');
    } else {
        console.log('Not Divisible by 3 and 5');
    }
}

checkDivisibility(30);
checkDivisibility(6);
checkDivisibility(50);
checkDivisibility(13);
