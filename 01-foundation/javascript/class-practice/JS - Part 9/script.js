// ============================================================
// DOM MANIPULATION PRACTICE
// Task: Create elements, style them, and append to the body.
// ============================================================

// Standard Step: Select the parent (Body) first
const body = document.querySelector('body');

// ------------------------------------------------------------
// TASK 1: <p> with red text
// ------------------------------------------------------------
let msg1 = document.createElement('p');
msg1.innerText = "Hey I'm red!";
msg1.style.color = 'red';

body.append(msg1);

// ------------------------------------------------------------
// TASK 2: <h3> with blue text
// ------------------------------------------------------------
let msg2 = document.createElement('h3');
msg2.innerText = "I'm a blue h3!";
msg2.style.color = 'blue';

body.append(msg2);

// ------------------------------------------------------------
// TASK 3: <div> with nested elements (The Challenge)
// ------------------------------------------------------------
// Step A: Create the Container (div)
let div = document.createElement('div');
div.style.border = '1px solid black';
div.style.backgroundColor = 'pink';

// Step B: Create the Children (h1, p)
let h1 = document.createElement('h1');
h1.innerText = "I'm in a div";

let p = document.createElement('p');
p.innerText = 'ME TOO!';

// Step C: Pack the Box (Append children into div)
// Note: We do this BEFORE putting the div on the page.
// Why? It's cleaner and causes fewer browser "repaints".
div.append(h1, p); // Pro Tip: .append() can take multiple arguments!

// Step D: Ship the Box (Append div to body)
body.append(div);
