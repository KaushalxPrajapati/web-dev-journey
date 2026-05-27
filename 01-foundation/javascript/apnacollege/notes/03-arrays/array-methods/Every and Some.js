// ==========================================================
// TOPIC: Array Logic Gates (.every vs .some)
// ==========================================================

// 1. .every() -> Returns true if ALL elements pass the test. (Strict / AND logic)
// 2. .some()  -> Returns true if ANY element passes the test. (Lenient / OR logic)

// ==========================================================
// PART 1: The .every() Method (Strict)
// ==========================================================
// Analogy: "Did EVERYONE pass the exam?"

const evensList = [2, 4, 6, 8];
const mixedList = [2, 4, 6, 9]; // Contains one odd number (9)

// CHECK: Is every number even?

// Case A: Success
// Result: true (All are even)
console.log("Every (All Even?):", evensList.every((num) => num % 2 === 0));

// Case B: Failure
// Result: false (Because 9 is not even)
console.log("Every (Mixed?):   ", mixedList.every((num) => num % 2 === 0));


console.log("------------------------------------------------");


// ==========================================================
// PART 2: The .some() Method (Lenient)
// ==========================================================
// Analogy: "Did ANYONE pass the exam?"

const oddsList  = [1, 3, 5, 7];
const hardList  = [1, 3, 5, 8]; // Contains one even number (8)

// CHECK: Is there at least one even number?

// Case A: Success
// Result: true (Yes! 8 is even. We found one, so we stop and return true.)
console.log("Some (Found Even?):", hardList.some((num) => num % 2 === 0));

// Case B: Failure
// Result: false (We checked all, found 0 evens.)
console.log("Some (All Odds?):  ", oddsList.some((num) => num % 2 === 0));


// ==========================================================
// SUMMARY CHEAT SHEET
// ==========================================================
/*
| Method   | Logic  | Explanation                                    |
| :------- | :----- | :--------------------------------------------- |
| .every() | AND    | Returns TRUE only if everyone matches.         |
| .some()  | OR     | Returns TRUE if at least one person matches.   |
*/