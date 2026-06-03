// ============================================================
// ASSIGNMENT Q2: DYNAMIC BUTTON CREATION
// ============================================================

// STEP 1: Setup - Select the parent container
const body = document.querySelector('body');

// STEP 2: Create the Element
// We create the button in memory first. It is not visible on the page yet.
const button = document.createElement('button');
button.innerText = 'CLICK ME!';

// Optional: Add some basic styling so it looks like a button
button.style.fontSize = '20px';
button.style.padding = '10px 20px';
button.style.border = '1px solid black';

// STEP 3: Insert into DOM
// Now we attach it to the body so the user can see it.
body.append(button);

// STEP 4: Add Interaction
// We listen for the 'click' event to change the color.
button.addEventListener('click', function () {
    // Check if already clicked, if -> yes then make it normal again and if -> no then make it appear green
    if (button.style.backgroundColor === 'green') {
        button.style.color = 'black'; // Color -> Black
        button.style.backgroundColor = 'rgb(229, 229, 229)'; // Background Color -> Gray
    } else {
        // REQUIREMENT: Change color to green on click
        button.style.backgroundColor = 'green';
        button.style.color = 'white'; // Enhancement: Make text readable
    }
});
