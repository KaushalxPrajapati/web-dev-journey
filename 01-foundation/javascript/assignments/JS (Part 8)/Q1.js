let numbers = [1, 2, 3, 4, 5];

// Step 1: Square each numbers using .map()
const sqrArray = numbers.map((num) => num ** 2);
console.log('Square of Array:', sqrArray); // [1, 4, 9, 16, 25]

// Step 2: Sum the squared numbers using .reduce()
// Note: We use 'acc' (accumulator) and 'val' (current value) for clarity
const sumArray = sqrArray.reduce((acc, val) => acc + val, 0);
console.log('Sum of Array:', sumArray); // 55

// Step 3: Calculate Average
let avgArray = sumArray / numbers.length;
console.log(`Average of array [${numbers}] is:`, avgArray); // 11
