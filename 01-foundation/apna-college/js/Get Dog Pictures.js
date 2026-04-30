// ============================================================
// CONFIGURATION
// ============================================================
// The API Endpoint (Public URL that returns JSON)
const url = 'https://dog.ceo/api/breeds/image/random';

// SELECT DOM ELEMENTS
const h1 = document.querySelector('h1');
const image = document.querySelector('img');
const button = document.querySelector('button');

let count = 0; // Track how many dogs we've seen

// ============================================================
// EVENT LISTENER (The Trigger)
// ============================================================
button.addEventListener('click', async () => {
    // 1. LOADING STATE: Give user feedback immediately
    button.innerText = 'Fetching...';
    button.style.backgroundColor = 'gray'; // JS overrides CSS here (Good!)
    button.disabled = true; // Prevent double-clicking while loading

    // 2. DATA FETCH: Wait for the DATA
    // The code literally pauses here until getDogPicture() finishes
    await getDogPicture();

    // 3. SUCCESS STATE: Reset UI
    h1.innerText = 'Another One?';
    button.innerText = 'CLICK HERE';

    // OLD (The Bug): Sets a permanent inline style that blocks hover effect which we have defined in our .css file
    // button.style.backgroundColor = 'rgb(70, 160, 220)';

    // NEW (The Fix): Removes the inline style so CSS takes over again, This tells the browser: "I'm done managing the color. Look at the CSS file again."
    button.style.backgroundColor = '';

    button.disabled = false; // Re-enable button

    // 4. METRICS
    console.log(`Dog Image #${++count}`);
});

// ============================================================
// ASYNC FUNCTION (The Worker)
// ============================================================
async function getDogPicture() {
    try {
        // STEP A: Request Data using Axios
        // Axios automatically parses the JSON response for us (no .json() needed)
        let response = await axios.get(url);

        // STEP B: Update DOM
        // The API returns the image URL inside the 'message' property
        image.src = response.data.message;

        // STEP C: Reveal Image
        // We unhide the image element now that it has a source
        image.style.display = 'block';
    } catch (e) {
        // ERROR HANDLING
        console.log('Error Caught:', e);
        h1.innerText = 'No dogs found (Network Error) 😿';
        image.style.display = 'none'; // Hide broken image if error
    }
}
