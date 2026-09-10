// Problem 10
// Given the following array:

let prices = [100, 250, 50, 400, 150];

// Use reduce() to calculate the total price.
//
// Add a 10% tax after calculating the total.
//
// Store the final amount in a variable called `finalAmount`.
//
// Expected output:
// 1045

const totalAmount = prices.reduce((acc, ele) => acc + ele);
console.log(`Total Amount: ${totalAmount}`);

const finalAmount = totalAmount + totalAmount * 0.1;
console.log(`Final Amount: ${finalAmount}`);
