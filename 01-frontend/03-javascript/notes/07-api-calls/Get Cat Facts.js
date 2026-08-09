// Get Cat Facts.js

let button = document.querySelector('button');
let h3 = document.querySelector('#result');
let url = 'https://catfact.ninja/fact';

// ==========================================
// METHOD 1: FETCH (Standard)
// ==========================================
async function getCatFacts1() {
    try {
        // 1. Show Loading State (UX Fix)
        h3.innerText = 'Fetching a new fact...';

        // 2. Network Request
        let response = await fetch(url);
        let data = await response.json();

        // 3. Update UI
        h3.innerText = data.fact;
    } catch (e) {
        console.log('Error:', e);
        h3.innerText = 'No facts available right now 😿';
    }
}

// ==========================================
// METHOD 2: AXIOS (Better!)
// ==========================================
// Since you already included the Axios script in HTML, let's use it!
// It saves you the '.json()' step.

async function getCatFacts2() {
    try {
        h3.innerText = 'Fetching with Axios...';

        // Axios automatically converts JSON for you!
        let response = await axios.get(url);

        // Note: Axios puts the actual server answer inside '.data'
        h3.innerText = response.data.fact;
    } catch (e) {
        console.log('Error:', e);
        h3.innerText = 'No facts available right now 😿';
    }
}

// Event Listener
button.addEventListener('click', async () => {
    // Switch between getCatFacts1() or getCatFacts2() here to test
    await getCatFacts2();
});
