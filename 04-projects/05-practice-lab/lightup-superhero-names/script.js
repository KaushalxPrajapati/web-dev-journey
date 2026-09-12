// ============================================================
// 1. THE PROMISE MAKER (The "Worker" Function)
// ============================================================
// Its job: Take an ID, wait 1 second, paint it, and tell the boss "Done".

function changeColor(id, color) {
    // We wrap standard logic in a Promise to make it "await-able"
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let element = document.getElementById(id);

            // VALIDATION CHECK
            if (element) {
                // SUCCESS: Element found
                element.style.color = color;
                console.log('Color Changed for', id.toUpperCase());

                // CRITICAL: We must call resolve() to un-pause the 'await' line below
                resolve();
            } else {
                // FAILURE: Element not found (e.g., typo in ID)
                // This triggers the 'catch' block in the main function
                reject(`Error: Could not find hero with ID '${id}'`);
            }
        }, 1000); // 1-second delay
    });
}

// ============================================================
// 2. THE ASYNC ORCHESTRATOR (The "Boss" Function)
// ============================================================
// 'async' keyword allows us to use 'await' inside this function.

async function lightUp() {
    // ERROR HANDLING (Safety Net)
    // If ANY line inside 'try' calls reject(), code jumps strictly to 'catch'.
    try {
        // EXECUTION FLOW:
        // 1. Start Iron Man task.
        // 2. PAUSE execution here for 1 second until it resolves.
        // 3. Move to next line.
        await changeColor('ironman', 'red');
        await changeColor('hulk', 'green'); // Waits 1 more sec
        await changeColor('batman', 'darkgray'); // Waits 1 more sec
        await changeColor('superman', 'darkblue'); // Waits 1 more sec
    } catch (err) {
        // This runs ONLY if a promise was rejected (e.g., typo in ID)
        console.log('Sequence Failed:', err);
    }

    // ========================================================
    // CONTINUATION
    // ========================================================
    // This code runs only AFTER the sequence above is finished (or caught).
    // This proves that 'await' truly paused the function execution sequence.

    let a = 2;
    let b = 2;
    console.log('No. of Superheroes: ', a + b);
}

// Start the show
lightUp();
