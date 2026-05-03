const box = document.querySelector('.box');

// Method 1: Using Anonymous Function Expressions as Callbacks
// const mouseIn = function () {
//     console.log('🟢 Pointer ENTERED the Box');
// };
// const mouseOut = function () {
//     console.log('🔴 Pointer LEFT the Box');
// };
// box.addEventListener('mouseenter', mouseIn);
// box.addEventListener('mouseout', mouseOut);


// Method 2: Using Anonymous Arrow Fuctions as Callbacks
// Fires ONCE when the cursor crosses the boundary into the element.
box.addEventListener('mouseenter', () => {
    console.log('🟢 Pointer ENTERED the Box');
    box.innerText = 'Hovering!'; // Visual feedback
});

// Fires ONCE when the cursor crosses the boundary out of the element.
box.addEventListener('mouseout', () => {
    console.log('🔴 Pointer LEFT the Box');
    box.innerText = ''; // Reset text
});

// Note: We prefer 'mouseleave' because 'mouseout' fires even if you hover over a child element!
