// Problem 7:
//
// Given the following arrays:
let primarySkills = ['JavaScript', 'React'];
let secondarySkills = ['Node.js', 'MongoDB'];

// Create a NEW array called `updatedSkills`
// that:
// 1. Contains all skills from `primarySkills`.
// 2. Contains all skills from `secondarySkills`.
// 3. Adds "Git" at the beginning.
// 4. Adds "Docker" at the end.
//
// Expected output:
// ["Git", "JavaScript", "React", "Node.js", "MongoDB", "Docker"]
//
// Requirements:
// 1. Use the spread operator (...).
// 2. Use a single array literal to create `updatedSkills`.
// 3. Do not use push(), unshift(), concat(), loops, or direct index assignment.
// 4. Do not modify the original arrays.
// 5. Log `updatedSkills`.

let updatedSkills = ['Git', ...primarySkills, ...secondarySkills, 'Docker'];
console.log(updatedSkills);
