// Creating Basic Promise

function checkEvenOdd(num) {
    return new Promise((resolve, reject) => {
        if (num % 2 === 0) {
            resolve('Number is even');
        } else {
            reject('Number is odd');
        }
    });
}

// Consuming or using promise
let a = 1;
checkEvenOdd(a).then(console.log).catch(console.log);
