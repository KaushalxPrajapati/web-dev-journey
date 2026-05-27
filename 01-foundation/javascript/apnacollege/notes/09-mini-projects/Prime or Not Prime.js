function isPrime1(num) {
    // 1. Guard Clause: Eliminate bad inputs instantly
    // if (!Number.isInteger(num) || num <= 1) return false; // this was put so that user cannot enter decimal values!
    if (num <= 1) {
        return false;
    }

    // 2. Optimization: Loop only up to Square Root
    for (let i = 2; i * i <= num; i++) {
        // 3. Modulo Check: If divisible, it's NOT prime
        if (num % i === 0) return false;
    }

    // 4. Default: If we survived the loop, it MUST be prime
    return true;
}

/**
 * Checks if a number is Prime using an optimized while loop.
 * Time Complexity: O(sqrt(N)) - Very Fast
 */
function isPrime2(num) {
    // ---------------------------------------------------------
    // STEP 1: GUARD CLAUSE (The "Bouncer")
    // ---------------------------------------------------------
    // If it's not a whole number OR it's less than/equal to 1...
    // Return FALSE immediately.
    if (!Number.isInteger(num) || num <= 1) {
        return false;
    }

    // ---------------------------------------------------------
    // STEP 2: SETUP
    // ---------------------------------------------------------
    let divisor = 2; // Start checking from the first prime number (2)

    // ---------------------------------------------------------
    // STEP 3: THE LOOP (Square Root Optimization)
    // ---------------------------------------------------------
    // Logic: Only check divisors up to the square root of num.
    // Example: If num is 25, we only check 2, 3, 4, 5.
    while (divisor * divisor <= num) {
        // STEP 4: THE CHECK
        // If num is divisible by divisor (remainder is 0)...
        if (num % divisor === 0) {
            return false; // ...It is NOT Prime. Eject immediately.
        }

        // STEP 5: THE INCREMENT (Crucial!)
        // Move to the next number to avoid Infinite Loop.
        divisor++;
    }

    // ---------------------------------------------------------
    // STEP 6: THE VERDICT
    // ---------------------------------------------------------
    // If the loop finishes naturally without returning false,
    // it means we found NO divisors. The number is Prime.
    return true;
}

// Tests
console.log('Results by FOR LOOP:');
console.log(isPrime1(7)); // true
console.log(isPrime1(12)); // false
console.log(isPrime1(25)); // false

console.log('');

console.log('Results by WHILE LOOP:');
console.log(isPrime2(7)); // true
console.log(isPrime2(25)); // false
console.log(isPrime2(25)); // false
