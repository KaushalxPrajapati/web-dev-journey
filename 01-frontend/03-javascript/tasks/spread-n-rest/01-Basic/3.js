// Problem 3:
//
// Given the following arrays:
let backend = ['Node.js', 'Express'];
let database = ['MongoDB', 'MySQL'];
let tools = ['Git', 'Docker'];

// Create a NEW array called `techStack`
// containing all elements from all three arrays.
//
// Expected output:
// ["Node.js", "Express", "MongoDB", "MySQL", "Git", "Docker"]
//
// Requirements:
// 1. Use the spread operator (...)
// 2. Do not use concat(), push(), or loops.
// 3. Do not modify any of the original arrays.
// 4. Log `techStack`.

const techStack = [...backend, ...database, ...tools];
console.log(techStack);
