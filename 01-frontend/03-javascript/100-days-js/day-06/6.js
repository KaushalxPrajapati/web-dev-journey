/*
=============================================================================
Problem 6: Comparison Operators

Create two number variables.

Use comparison operators to check and print the result of:

- Is the first number greater than the second?
- Is the first number less than the second?
- Are the two numbers equal?
- Are the two numbers not equal?
- Is the first number greater than or equal to the second?
- Is the first number less than or equal to the second?

Use:
>
<
===
!==
>=
<=
=============================================================================
*/

function check(a, b) {
    if (Number.isInteger(a) && Number.isInteger(b)) {
        console.log(a > b);
        console.log(a < b);
        console.log(a >= b);
        console.log(a <= b);
        console.log(a === b);
        console.log(a !== b);
    } else {
        return 'Please Enter an Integer Value!';
    }
}

const a = 10;
const b = 5;

check(a, b);
