// Problem 17
// You are given a list of transactions:

let transactions = [
    { type: 'credit', amount: 5000 },
    { type: 'debit', amount: 1200 },
    { type: 'debit', amount: 800 },
    { type: 'credit', amount: 3000 },
    { type: 'debit', amount: 500 },
    { type: 'credit', amount: 2000 },
];

// Calculate the final account balance.
//
// Rules:
// - "credit" → add the amount
// - "debit" → subtract the amount
//
// Store the result in:
// `finalBalance`
//
// Expected output:
// 7500
//
// Requirement:
// Use reduce().
// Do not use a normal for loop.

// let credit = 0;
// let debit = 0;

// const finalBalance = transactions.filter((transacType) => {
//     if (transacType.type.toLowerCase() === 'credit') {
//         credit = credit + transacType.amount;
//     } else if (transacType.type.toLowerCase() === 'debit') {
//         debit = debit + transacType.amount;
//     }
// });

// console.log(`Your current Balance is: ${credit - debit}`);

// let credit = [];
// let debit = [];

// transactions.filter((transacType) => {
//     if (transacType.type.toLowerCase() === 'credit') {
//         credit.push(transacType.amount);
//     } else if (transacType.type.toLowerCase() === 'debit') {
//         debit.push(-transacType.amount);
//     }
// });

// const finalBalance = [...credit, ...debit].reduce((amount, ele) => amount + ele);
// console.log(`Your current Balance is: ${finalBalance}`);

const finalBalance = transactions.reduce((balance, transaction) => {
    if (transaction.type === 'credit') {
        return balance + transaction.amount;
    } else {
        return balance - transaction.amount;
    }
}, 0);
