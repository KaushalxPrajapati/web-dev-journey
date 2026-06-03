// Practice Qs - Postfix (num++) vs Prefix (++num)

let num = 5;
console.log("Step 1 → num =", num);  // prints 5

// Postfix (num++): First use old value, then increment
let newNum = num++;
console.log("Step 2 → newNum =", newNum);  // prints 5 (old value used)
console.log("Step 2 → num =", num);        // prints 6 (then incremented)

// Prefix (++num): First increment value, then use
newNum = ++num;
console.log("Step 3 → newNum =", newNum);  // prints 7 (new value after increment)
console.log("Step 3 → num =", num);        // prints 7 (incremented first, then used)
