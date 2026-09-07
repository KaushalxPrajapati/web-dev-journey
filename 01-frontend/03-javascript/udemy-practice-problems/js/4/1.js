// Sum of First N Natural Numbers
function sumOfN(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i;
    }

    return sum;
}

const n = 10;
console.log(`Sum of first ${n} Natural No. is: ${sumOfN(n)}`);
