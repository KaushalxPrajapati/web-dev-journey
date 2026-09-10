// Problem 15
// Given the following array:

let products = [
    { name: 'Laptop', price: 60000 },
    { name: 'Mouse', price: 800 },
    { name: 'Keyboard', price: 1500 },
    { name: 'Monitor', price: 12000 },
    { name: 'Headphones', price: 2500 },
];

// 1. Use filter() to keep only products costing more than 2000.
// 2. Use map() to create an array containing ONLY their names.
// 3. Use some() to check whether any product costs more than 50000.
//
// Store the results in:
// `expensiveProductNames`
// `hasVeryExpensiveProduct`

const expensiveProducts = products.filter((item) => item.price > 2000);

const expensiveProductNames = expensiveProducts.map((item) => item.name);
console.log(expensiveProductNames); // ['Laptop', 'Monitor', 'Headphones']

const hasVeryExpensiveProduct = products.some((item) => item.price > 50000);
console.log(hasVeryExpensiveProduct); // true
