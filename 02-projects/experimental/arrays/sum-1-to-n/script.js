// find the sum of first 'n'(num) natural numbers (e.g. 1+2+3+4+5+6+7+....)

// Using 'for' loop
function sum1(num) {
    let sum = 0;
    for (let i = 0; i <= num; i++) {
        sum = sum + i;
    }
    console.log(sum);
}

// Using 'while' loop
function sum2(num) {
    let sum = 0;
    let i = 1;
    while (i <= num) {
        sum = sum + i;
        i++;
    }
    console.log(sum);
}

num = 10;
sum1(num);
sum2(num);
