// ==========================================================
// Qs4. Tricky Interview Question: 'this' Context & Scope
// ==========================================================

let length = 4; // Line 1: Global Variable (declared with 'let', so it does NOT attach to Window)

function callback() {
    // Line 2: The Trap. 'this' depends on HOW this function is called.
    // Since it's called as a "Naked Call" later, 'this' becomes Window.
    // Window.length is 0 (default in browsers), NOT 4 (because of 'let').
    console.log(this.length);
}

const object = {
    length: 5, // Line 3: Object Property

    method(callback) {
        // Line 4: The Execution inside the method.
        // We are calling 'callback()' directly.
        // We represent this as a "Naked Call" (no object dot before it).
        callback();
    },
};

// Line 5: The Start. We call the method, passing the callback function.
object.method(callback, 1, 2);

// ==========================================================
// DETAILED DRY RUN (The Flow of Execution)
// ==========================================================

// 1. Line 1:
//    Variable 'length' = 4 is created in Script Scope.
//    NOTE: Since we used 'let', this variable is NOT attached to the Global 'window' object.

// 2. Line 5:
//    We execute object.method(callback).
//    The control jumps inside the 'method' function at Line 4.

// 3. Line 4:
//    The code executes 'callback();'
//    CRITICAL STEP: This is a "Naked Call".
//    There is no object before the function name (like object.callback()).
//    Rule: Naked Calls always reset 'this' to the Global Object (Window).

// 4. Line 2 (Inside callback):
//    The code executes 'console.log(this.length);'
//    Since 'this' is Window, it looks for 'window.length'.
//    - It cannot see our 'let length = 4' (Scope restriction).
//    - It finds the browser's native 'window.length' (which counts iframes).
//    - By default, this is 0.

// OUTPUT: 0
