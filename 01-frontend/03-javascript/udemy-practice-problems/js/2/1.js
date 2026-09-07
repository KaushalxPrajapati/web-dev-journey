// Playing with Variables

// **** DO NOT CHANGE the values *****
const a = 18;
const b = 24;

// Addition of two values
function add() {
    return a + b;
}

// Subtract small value from larger one
function subtract() {
    return b - a;
}

function multiply() {
    return a * b;
}

// Divide larger value by small
function divide() {
    return b / a;
}

// Increase value of a by 1
function increment() {
    return a + 1;
}

// Decrease value of b by 1
function decrement() {
    return b - 1;
}

// Divide larger value by small to find the reminder
function reminder() {
    return b % a;
}

console.log(add());        // 42
console.log(subtract());   // 6
console.log(multiply());   // 432
console.log(divide());     // 1.3333333333333333
console.log(increment());  // 19
console.log(decrement());  // 23
console.log(reminder());   // 6
