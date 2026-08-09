// Step 1: Select the element
let h1 = document.querySelector('#main-title');

// ---------------------------------------------------------
// YOUR TASK:
// ---------------------------------------------------------

// 1. Add the class "green-mode" to h1.
h1.classList.add('green-mode');

// 2. Remove the class "green-mode" from h1.
h1.classList.remove('green-mode');

// 3. Check if h1 contains the class "green-mode" (Log true/false).
let result = h1.classList.contains('green-mode');
console.log(result);

// 4. Toggle the class "green-mode".
h1.classList.toggle('green-mode');
