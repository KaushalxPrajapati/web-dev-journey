// ============================================================
// CONFIGURATION
// ============================================================
// The endpoint we are requesting data from.
let url = 'https://catfact.ninja/fact';

// ============================================================
// ASYNC FETCH FUNCTION
// ============================================================
async function getFacts() {
    // ERROR HANDLING (The Safety Net)
    // Network requests are unpredictable (Server down? No WiFi?).
    // We wrap them in 'try' so if they fail, our app doesn't crash.
    try {
        console.log('1. Sending Request...');

        // STEP 1: The Network Request
        // 'fetch' returns a Promise that resolves when the server *responds* with headers.
        // We 'await' here because the internet is slow.
        let response = await fetch(url);

        // STEP 2: The Parsing (The "Two-Await" Rule)
        // Even after we get the response, the *body* of the data is a readable stream.
        // We must 'await' the conversion to JSON format.
        let data = await response.json();

        // Success! We can now use the specific data field.
        console.log('2. Data Received:', data.fact);
    } catch (err) {
        // FAILURE CASE:
        // If WiFi is off or URL is wrong, code jumps here.
        console.log('ERROR - Could not fetch fact:', err);
    }

    // ========================================================
    // CONTINUATION (Non-Blocking Proof)
    // ========================================================
    // This code runs only AFTER the try/catch block is finished.
    // This proves that 'await' paused this function, but the Error Handler
    // prevented the script from dying.

    console.log('3. Continuing execution...');

    let name = 'Kaushal Prajapati';
    console.log('Is your name:', name, '?');

    let b = (36 / 12) * 3;
    console.log('Math Result:', b);

    let c = ['I', 'am', 'Batman'];
    console.log('Array:', c);
}

// Start the process
getFacts();
