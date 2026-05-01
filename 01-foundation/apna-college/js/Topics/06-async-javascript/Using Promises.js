// ============================================================
// UTILITY: Color Change Function (Promise-Based)
// ============================================================
// Why Promises?
// They allow us to avoid "Callback Hell" (nesting functions inside functions).
// Instead, we can chain actions in a straight line.

function changeColor(color, delay) {
    // We return a NEW Promise object immediately.
    // The Promise takes a function with 'resolve' (success) and 'reject' (failure).
    return new Promise((resolve, reject) => {
        // The Async Action (Timer)
        setTimeout(() => {
            const h1 = document.querySelector('h1');

            // 1. Perform the visual change
            h1.style.color = color;
            console.log(`${color.toUpperCase()} color has been Applied!`);

            // 2. CRITICAL STEP: Call resolve()
            // This tells the Promise: "I am done. You can move to the .then() block."
            // If you forget this, the chain stops here forever.
            resolve();
        }, delay);
    });
}

// ============================================================
// EXECUTION: The Promise Chain
// ============================================================
// Reading flow: "Do this... THEN do this... THEN do this..."

changeColor('red', 1000) // Returns a Promise
    .then(() => {
        // This runs ONLY after 'red' is resolved.
        return changeColor('green', 1000); // Return the NEXT promise to keep the chain alive
    })
    .then(() => {
        return changeColor('blue', 1000);
    })
    .then(() => {
        return changeColor('hotpink', 1000);
    })
    .then(() => {
        return changeColor('purple', 1000);
    })
    .then(() => {
        return changeColor('orange', 1000);
    })
    // Optional: Catch any errors in the entire chain
    .catch((error) => {
        console.log('Something went wrong in the chain:', error);
    });
