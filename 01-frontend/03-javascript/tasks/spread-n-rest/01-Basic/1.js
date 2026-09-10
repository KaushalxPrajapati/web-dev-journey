// Problem 1:
//
// Given the following array:
let frontend = ['HTML', 'CSS', 'JavaScript'];

// Create a NEW array containing all elements of `frontend`,
// followed by "Node.js" and "MongoDB".
//
// Store the result in a variable called `fullStack`.
//
// Requirements:
// 1. Use the spread operator (...)
// 2. Do not use push(), concat(), loops, or direct assignment.
// 3. Do not modify the original `frontend` array.
// 4. Change one element in `fullStack` after creating it.
// 5. Log both arrays to verify that `frontend` remains unchanged.
// 6. Explain in a comment: Why does changing `fullStack` not change `frontend`?

const fullStack = [...frontend, 'Node.js', 'MongoDB'];
console.log('New Array (Before):', fullStack);
fullStack[fullStack.length] = 'Go';
console.log('New Array (After):', fullStack);

console.log('Original Array:', frontend);
