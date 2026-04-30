// ==========================================================
// Qs3. What is the output of the following code?
// ==========================================================

const object = {
    message: "Hello, World!",
    logMessage() {
        console.log(this.message);
    },
};

// PROBLEM LINE:
setTimeout(object.logMessage, 1000); // Output: undefined

// --- Explanation of the Problem ---
// The code above prints 'undefined'.
// REASON: When object.logMessage is passed to setTimeout, only the *function code* is passed.
// The connection to the 'object' is lost.
// When setTimeout runs the function later, 'this' defaults to the global 'window' object.
// It tries to access 'window.message', which does not exist (undefined).

// --- The Correct Solution ---

// To fix this, we wrap the call inside an Arrow Function.
setTimeout(() => {
    // When this runs, we are explicitly calling 'logMessage' ON 'object'.
    // This restores the link, so 'this' correctly refers to 'object'.
    object.logMessage();
}, 1000); // Output: "Hello, World!" (after 1 second)
