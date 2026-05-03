// ============================================================
// ASSIGNMENT Q3: INPUT VALIDATION (Manual Logic)
// ============================================================

// STEP 1: Create & Append Elements
const h2 = document.createElement('h2');
h2.innerText = 'Is your name:';

const input = document.createElement('input');
input.placeholder = 'Enter your name:';

const body = document.querySelector('body');
body.append(input, h2);

// STEP 2: The Logic Function
const theLogic = function () {
    
    // Define the "White List" (Only small letters needed because we check lowercase later)
    const letters = 'abcdefghijklmnopqrstuvwxyz';
    
    let cleanName = ''; // Start with an empty bucket

    // Loop through every character typed
    for (let char of input.value) {
        
        // CHECK: 
        // 1. Convert char to lowercase to match our list (allows 'A' to match 'a')
        // 2. Explicitly allow spaces
        if (letters.includes(char.toLowerCase()) || char === ' ') {
            cleanName = cleanName + char; // Keep the character
        } else {
            console.log('Filtered out invalid character:', char);
        }
    }

    // STEP 3: Formatting (Auto-Capitalize First Letter)
    // Takes the first letter -> makes it BIG -> adds the rest of the name
    if (cleanName.length > 0) {
        cleanName = cleanName.charAt(0).toUpperCase() + cleanName.slice(1);
    }

    // STEP 4: Update UI
    h2.innerText = `Is your name: ${cleanName}`;

    // Force the input box to show only the clean version (removes other characters instantly)
    input.value = cleanName;
};

// STEP 5: Attach Listener
// 'input' event fires instantly on every keystroke
input.addEventListener('input', theLogic);