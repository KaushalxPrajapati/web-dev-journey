/*
=============================================================================
Problem 4: Simple Calculator

Create a function called `calculator` that takes three parameters:

- `a` → first number
- `operator` → arithmetic operator
- `b` → second number

The function should perform the requested operation and return the result.

Supported operators:
+
-
*
/

Example:
calculator(10, "+", 5) → 15
calculator(10, "*", 5) → 50
=============================================================================
*/

function calculator(a, operator, b) {
    if (operator === '+') {
        return a + b;
    } else if (operator === '-') {
        return a - b;
    } else if (operator === '*') {
        return a * b;
    } else if (operator === '/') {
        return a / b;
    } else {
        return 'Invalid Operator!';
    }
}

console.log(calculator(10, '+', 5)); // --> 15
console.log(calculator(10, '-', 5)); // --> 5
console.log(calculator(10, '*', 5)); // --> 50
console.log(calculator(10, '/', 5)); // --> 2
console.log(calculator(10, '%', 5)); // --> Invalid Operator!
