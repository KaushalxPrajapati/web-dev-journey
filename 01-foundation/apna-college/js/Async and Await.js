// ============================================================
// UTILITY: The Promise Creator
// ============================================================
// This function remains exactly the same as in the .then() method.
// We still need a function that RETURNS a Promise to 'await' on.

function changeColor(color, delay) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const h1 = document.querySelector('h1');
            h1.style.color = color;
            console.log(`${color.toUpperCase()} color has been Applied!`);

            // Signal that the work is done.
            // Also The 'await' keyword below is listening specifically for this resolve().
            resolve();
        }, 1000);
    });
}

// ============================================================
// MAIN LOGIC: The Async Function
// ============================================================
// Keyword 'async': Tells JS "This function contains code that takes time."

async function rainbow() {
    // Keyword 'await':
    // It literally pauses execution at this line.
    // It says: "Do not run line 31 until line 30 is fully resolved."

    // Benefit: No more .then() chains!
    // The code reads top-to-bottom, just like normal synchronous code.

    await changeColor('violet'); // Wait 1 sec... done.
    await changeColor('indigo'); // Wait 1 sec... done.
    await changeColor('blue'); // Wait 1 sec... done.
    await changeColor('green');
    await changeColor('yellow');
    await changeColor('orange');
    await changeColor('red');

    console.log('SEQUENCE COMPLETED');
}

// ============================================================
// EXECUTION
// ============================================================
// We call the function normally.
// Note: 'rainbow' itself returns a Promise (because it's async),
// so you could even .then() this call if you wanted to!

rainbow();
