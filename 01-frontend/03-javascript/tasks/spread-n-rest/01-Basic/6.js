// Problem 6:
//
// Given the following arrays:
let frontend = ['HTML', 'CSS', 'JavaScript'];
let backend = ['Node.js', 'Express'];

// Create a NEW array called `developmentStack`
// that contains all elements from both arrays,
// but places "JavaScript" at the END.
//
// Expected output:
// ["HTML", "CSS", "Node.js", "Express", "JavaScript"]
//
// Requirements:
// 1. Use the spread operator (...)
// 2. Do not use splice(), push(), concat(), or loops.
// 3. Do not modify `frontend` or `backend`.
// 4. Log `developmentStack`.

let developmentStack = [frontend[0], frontend[1], ...backend, frontend[2]];
console.log(developmentStack);
