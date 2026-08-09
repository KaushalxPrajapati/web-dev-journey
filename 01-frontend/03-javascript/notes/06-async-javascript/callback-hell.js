let h1 = document.querySelector('h1');

// // Method 1:
// setTimeout(() => {
//     h1.style.color = 'violet';
// }, 1000);

// setTimeout(() => {
//     h1.style.color = 'indigo';
// }, 2000);

// setTimeout(() => {
//     h1.style.color = 'blue';
// }, 3000);

// setTimeout(() => {
//     h1.style.color = 'orange';
// }, 4000);

// setTimeout(() => {
//     h1.style.color = 'green';
// }, 5000);

// Method 2: Making a separate function then calling them with color and delay arguments
// function changeColor(color, delay) {
//     setTimeout(() => {
//         h1.style.color = color;
//     }, delay);
// }

// changeColor('violet', 1000);
// changeColor('indigo', 2000);
// changeColor('blue', 3000);
// changeColor('orange', 4000);
// changeColor('green', 5000);

// Method 3: Callback inside callback (nested callbacks)
function changeColor(color, delay, nextColor) {
    setTimeout(() => {
        h1.style.color = color;
        nextColor();
    }, delay);
}

changeColor('purple', 1000, () => {
    changeColor('hotpink', 1000, () => {
        changeColor('blue', 1000, () => {
            changeColor('orange', 1000, () => {
                changeColor('green', 1000);
            });
        });
    });
});
