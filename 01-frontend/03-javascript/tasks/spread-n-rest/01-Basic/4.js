// Problem 4:
//
// Given the following array:
let languages = ['JavaScript', 'Java', 'Python', 'C'];

// Create a NEW array called `copiedLanguages`
// that contains all elements of `languages`.
//
// Then:
// 1. Add "C++" to the END of `copiedLanguages`.
// 2. Do not modify `languages`.
// 3. Log both arrays.
//
// Requirements:
// 1. Use the spread operator (...) to create the copy.
// 2. Do not use concat(), push(), or direct assignment.
// 3. `languages` must remain unchanged.

const copiedLanguages = [...languages];
console.log(`Copied Array (Before):${copiedLanguages}`);

copiedLanguages.push('C++');
console.log(`Copied Array (After): ${copiedLanguages}`);

console.log(languages); // Unchanged
