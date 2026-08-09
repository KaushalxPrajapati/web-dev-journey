// What is the minimum no. you want in your range ?
let min = 0;

// What is the Maximum no. you want in your range ?
let max = 3;

while (true) {
    // Random integer in range [min, max], Use Math.floor(Math.random() * (max - min + 1)) + min;
    let x = Math.floor(Math.random() * (max + 1));

    // Break when boundary value appears
    if (x === min || x === max) {
        console.log('Loop broked at:', x);
        break;
    }

    console.log(x);
}

// RANGE LOGIC:
// Math.random() → generates a floating-point number in range: [0, 1)
// Math.random() * 256 → range becomes: [0, 256)
// Math.floor(...) → converts to integer range: 0 to 255
// (e.g) so, x ∈ {0, 1, 2, 3,..., 253, 254, 255}
