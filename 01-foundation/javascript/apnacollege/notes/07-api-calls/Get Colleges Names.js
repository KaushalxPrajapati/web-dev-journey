// ============================================================
// CONFIGURATION & SELECTION
// ============================================================
const url = 'http://universities.hipolabs.com/search?country=';
const input = document.querySelector('input');
const button = document.querySelector('button');
const list = document.querySelector('#list');
const msg = document.querySelector('#status-msg');

// ============================================================
// EVENT LISTENERS
// ============================================================

// 1. Click Button
button.addEventListener('click', async () => {
    let countryName = input.value;
    await showColleges(countryName); // Here we are calling the "Master Function" i.e 'showColleges()' to handle the work
});

// 2. Press Enter (Attached to Input only, safer than 'document')
input.addEventListener('keydown', async (event) => {
    if (event.key === 'Enter') {
        let countryName = input.value;
        await showColleges(countryName); // Here we are calling the "Master Function" i.e 'showColleges()' to handle the work
    }
});

// ============================================================
// MAIN LOGIC (The Master Function)
// ============================================================
// Why create this? Because we use it in TWO places (Click & Enter).
// Instead of copy-pasting code, we write it once here. (DRY Principle)

async function showColleges(country) {
    // A. VALIDATION: Don't search if input is empty
    if (country === '') return;

    // B. RESET UI: Clear previous results & show loading
    list.innerText = '';
    msg.innerText = 'Searching...';

    // C. FETCH DATA
    let collegeArray = await getColleges(country);

    // D. RENDER DATA
    if (collegeArray.length === 0) {
        msg.innerText = 'No universities found.';
        return;
    }

    msg.innerText = ''; // Clear status message

    for (let college of collegeArray) {
        // Create List Item
        let li = document.createElement('li');
        li.innerText = college.name;

        // Add to DOM
        list.appendChild(li);
    }

    console.log(`Found ${collegeArray.length} universities.`);
}

// ============================================================
// API WORKER (Axios)
// ============================================================
async function getColleges(country) {
    try {
        let response = await axios.get(url + country);
        return response.data;
    } catch (e) {
        console.log('Error:', e);
        msg.innerText = 'Error fetching data.';
        return []; // Return empty array so the app doesn't crash
    }
}
