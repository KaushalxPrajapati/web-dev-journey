// =======================================================
// RANDOM COLOR GENERATOR (Optimized)
// =======================================================

// STEP 1: Select elements ONCE (Global Scope / Top Level)
// "Cache" these variables so we don't have to search the DOM every click.
const h1 = document.querySelector('h1');
const box = document.querySelector('.box');
const button = document.querySelector('button');

// STEP 2: Define the Logic
const generateColor = () => {
    // Generate Random Numbers
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);

    const colorString = `rgb(${r}, ${g}, ${b})`;

    // Update UI
    h1.innerText = colorString;
    box.style.backgroundColor = colorString;

    console.log('Color Updated:', colorString); // Optional: For debugging
};

// STEP 3: Add Listener
button.addEventListener('click', generateColor);
