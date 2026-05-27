let a = 55;
let b = 18;
let c = 13;

if (a > b) {
    if (a > c) {
        console.log(a, "is the largest")      // This can also be used here---> console.log(`${a} is the largest`)
    } else {
        console.log(c, "is the largest")
    }
} else {
    if (b > c) {
        console.log(b, "is the largest")
    } else {
        console.log(c, "is the largest")
    }
}