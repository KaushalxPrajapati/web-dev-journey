// ============================================================
// UTILITY: Simulating an Unreliable API
// ============================================================
function changeColor(color, delay) {
    // Standard Promise constructor
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // SIMULATING FAILURE:
            // We generate a random number to mimic a network error (e.g., 20% chance of failure).
            let num = Math.floor(Math.random() * 5) + 1;

            if (num > 4) {
                // FAILURE CASE:
                // If this happens, the Promise enters the "Rejected" state.
                // In an async function, this triggers the 'catch' block immediately.
                reject(`Request rejected for color ${color.toUpperCase()}`);
            } else {
                // SUCCESS CASE:
                const h1 = document.querySelector('h1');
                h1.style.color = color;
                console.log(`${color.toUpperCase()} color has been Applied!`);
                resolve(); // Signal completion
            }
        }, delay);
    });
}

// ============================================================
// MAIN LOGIC: The "Safe" Async Function
// ============================================================
async function demo() {
    // THE SAFETY NET (try-catch)
    // We wrap unreliable code in a 'try' block.
    // If ANY line inside 'try' fails (rejects), execution STOPS immediately
    // and jumps straight to the 'catch' block.
    try {
        await changeColor('violet', 1000);
        await changeColor('indigo', 1000);
        await changeColor('blue', 1000);
        await changeColor('green', 1000);
        await changeColor('yellow', 1000);
        await changeColor('orange', 1000);
        await changeColor('red', 1000);

        // If we get here, it means ALL requests succeeded.
        console.log('SUCCESS: All colors applied.');
    } catch (err) {
        // ERROR HANDLING:
        // This block only runs if one of the 'await' calls above failed.
        // The 'err' variable holds whatever message we passed to reject().
        console.log('ERROR CAUGHT:', err);
    }

    // ========================================================
    // CRITICAL CONCEPT: Execution Continuation
    // ========================================================
    // Because we caught the error, the function does NOT crash.
    // It handles the problem and moves on to the next task.
    // This code below runs regardless of whether the colors succeeded or failed.

    const string1 = 'I'; // Always use 'const' or 'let', never imply globals!
    const string2 = 'am';
    const string3 = 'Batman';

    const finalString = `${string1} ${string2} ${string3}`;
    console.log(finalString);
}

demo();
