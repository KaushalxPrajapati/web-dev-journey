// ==========================
// GAME CONTROLLER LOGIC
// ==========================

// STEP 1: Select Elements
// We use const because these elements never change.
const box = document.querySelector('.box');
const h1 = document.querySelector('h1');

// STEP 2: State Variables (The Memory)
// These variables track exactly where the box is on the screen.
// We start at (0, 0) which is the center of the container.
let x = 0;
let y = 0;

// CONFIG: How many pixels to move per keypress
const speed = 25;

// STEP 3: The Movement Logic
const moveBoxLogic = (event) => {
    // Normalize input: Convert key to lowercase so 'W' and 'w' both work.
    const key = event.key.toLowerCase();

    // ----------------------------------------------------
    // DIRECTION LOGIC
    // ----------------------------------------------------
    if (key === 'w' || key === 'arrowup') {
        event.preventDefault(); // Stop browser from scrolling up
        y = y - speed; // Move UP (Negative Y is up in web coordinates)
        h1.innerText = 'Moving: UP';
    } else if (key === 's' || key === 'arrowdown') {
        event.preventDefault(); // Stop browser from scrolling down
        y = y + speed; // Move DOWN
        h1.innerText = 'Moving: DOWN';
    } else if (key === 'a' || key === 'arrowleft') {
        event.preventDefault(); // Stop browser from scrolling left
        x = x - speed; // Move LEFT
        h1.innerText = 'Moving: LEFT';
    } else if (key === 'd' || key === 'arrowright') {
        event.preventDefault(); // Stop browser from scrolling right
        x = x + speed; // Move RIGHT
        h1.innerText = 'Moving: RIGHT';
    } else {
        // EXIT immediately if the user pressed a wrong key (like 'Enter')
        // This saves processing power.
        return;
    }

    // STEP 4: Render (Update the Screen)
    // We update the CSS transform property using the current X and Y coordinates.
    // Template Literals `${}` allow us to inject variables directly into the string.
    box.style.transform = `translate(${x}px, ${y}px)`;

    // Optional: Log for debugging
    console.log(`Position: (${x}, ${y})`);
};

// STEP 5: Attach Event Listener
// 1. Attach to 'window' so it works anywhere on the page (no need to click an input).
// 2. Use 'keydown' because it fires instantly and continuously when held down.
window.addEventListener('keydown', moveBoxLogic);
