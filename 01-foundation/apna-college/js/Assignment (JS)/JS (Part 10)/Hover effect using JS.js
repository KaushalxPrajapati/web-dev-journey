// ============================================================
// UI INTERACTION: CARD HOVER EFFECTS
// ============================================================

// STEP 1: Select All Elements
// querySelectorAll returns a NodeList (similar to an Array) of all elements with class '.box'
const boxes = document.querySelectorAll('.box');

// STEP 2: Iterate through each box
// We use .forEach() to attach listeners to every single box individually.
boxes.forEach((box) => {
    // ----------------------------------------------------
    // EVENT: Mouse Enters the Box
    // ----------------------------------------------------
    box.addEventListener('mouseenter', (event) => {
        // event.target.style.color = 'black';
        // event.target.style.backgroundColor = 'lightgray';
        box.style.color = 'black';
        box.style.backgroundColor = 'lightgray';
    });

    // ----------------------------------------------------
    // EVENT: Mouse Leaves the Box
    // ----------------------------------------------------
    box.addEventListener('mouseleave', (event) => {
        // event.target.style.color = '';
        // event.target.style.backgroundColor = '';
        box.style.color = '';
        box.style.backgroundColor = '';
    });
});


// Also You Can Use 'for' loop

// for (let i = 0; i < boxList.length; i++) {
//     boxList[i].addEventListener('mouseenter', (event) => {
//         event.target.style.color = 'black';
//         event.target.style.backgroundColor = 'lightgray';
//     });

//     boxList[i].addEventListener('mouseleave', (event) => {
//         event.target.style.color = '';
//         event.target.style.backgroundColor = '';
//     });
// }
