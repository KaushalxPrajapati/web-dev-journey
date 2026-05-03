// ===========================================================
// Goal: Print "Hello World" exactly 5 times, 2 seconds apart.
// ===========================================================

let count = 0; // 1. The Counter: Keeps track of how many times we ran.
const id = setInterval(() => {
    // A. The Action
    console.log('Hello World');

    // B. The Update: Increase the counter immediately after printing
    count++;

    // C. The Check: Have we reached the limit (5)?
    if (count === 5) {
        clearInterval(id); // 2. The Stop Button: Use the 'id' to kill the timer.
        console.log('\nCompleted!'); // Optional: Visual proof that it stopped.
    }
}, 2000); // 2000ms = 2 seconds delay
