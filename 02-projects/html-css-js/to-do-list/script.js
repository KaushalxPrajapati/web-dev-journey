// ============================================================
// STEP 1: SELECT ELEMENTS & INITIAL SETUP
// ============================================================
const input = document.querySelector('input');
const addButton = document.querySelector('.add-button'); // Selected by class
const ul = document.querySelector('ul');

// ============================================================
// LOGIC 1: INPUT GATEKEEPER
// Purpose: Only show the "Add" button if there is text typed.
// ============================================================
input.addEventListener('input', function () {
    if (input.value.trim().length > 0) {
        addButton.style.display = 'inline-block';
    } else {
        addButton.style.display = 'none';
    }
});

// ============================================================
// LOGIC 2: ADDING TASKS
// Purpose: Create the HTML elements for a new task.
// ============================================================
addButton.addEventListener('click', function () {
    // 1. Create the List Item (li)
    const li = document.createElement('li');
    // Format text: Capitalize first letter + rest of string
    const cleanText = input.value.charAt(0).toUpperCase() + input.value.slice(1);
    li.innerText = cleanText;

    // 2. Create the Delete Button
    // IMPORTANT: We do NOT add an event listener here anymore!
    // We just give it a class so we can recognize it later.
    const delBtn = document.createElement('button');
    delBtn.innerText = 'delete';
    delBtn.classList.add('delete-btn'); // Add class for CSS styling

    // 3. Assemble the HTML
    li.appendChild(delBtn); // Put button inside li
    ul.appendChild(li); // Put li inside ul

    // 4. Reset Input Field
    input.value = '';
    addButton.style.display = 'none';
});

// ============================================================
// LOGIC 3: DELETING TASKS (EVENT DELEGATION)
// Purpose: Handle clicks on Delete buttons efficiently.
// ============================================================
// CONCEPT: Instead of 100 listeners on 100 buttons, we put
// ONE listener on the parent (UL). The event "Bubbles Up" to here.

ul.addEventListener('click', function (event) {
    // DEBUG: Uncomment this to see what you clicked!
    // console.log("You clicked on:", event.target.nodeName);

    // CHECK: Did the user click a BUTTON?, Is nodeName = BUTTON?
    if (event.target.nodeName === 'BUTTON') {
        // YES! They clicked a delete button.
        // Now we need to find the specific List Item (LI) that holds this button.

        // 'parentElement' goes up one level: Button -> LI
        const listItem = event.target.parentElement;

        // Remove that specific LI from the DOM
        listItem.remove();

        // Also LOG the message into the console that the task has been deleted.
        console.log('Task Deleted!');
    }
});