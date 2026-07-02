// ============================================================
// 📌 STEP 1: SELECT THE HTML ELEMENTS WE NEED
// ============================================================
// We use querySelector to "grab" elements from the HTML page,
// so JavaScript can read or change them.

// Grab the text input field where the user types tasks.
const input = document.querySelector('input');

// Grab the "Add Task" button.
const addButton = document.querySelector('.add-button');

// Grab the <ul> list where all the tasks will be displayed.
const ul = document.querySelector('ul');

// ============================================================
// 📌 STEP 2: DEFINE A FUNCTION TO ADD A NEW TASK
// ============================================================
// We put the "add task" logic inside a function so we can
// reuse it for BOTH the button click AND the Enter key press.
// This way, we don't have to write the same code twice.

function addTask() {
    // ✅ Gatekeeper: If the input is empty (or only spaces),
    // stop here. Don't add an empty task.
    if (input.value.trim() === '') return;

    // 1️⃣ Create a new <li> element (a list item).
    const li = document.createElement('li');

    // Set the text of the <li> to whatever the user typed.
    li.innerText = input.value;

    // 2️⃣ Create a "delete" button inside the <li>.
    // We give it a class 'delete-btn' so we can recognize it later
    // (and also style it with CSS).
    const delBtn = document.createElement('button');
    delBtn.innerText = 'delete';
    delBtn.classList.add('delete-btn');

    // 3️⃣ Put the delete button INSIDE the <li>.
    // Structure becomes: <li>Task text <button>delete</button></li>
    li.appendChild(delBtn);

    // 4️⃣ Put the <li> INSIDE the <ul> (the visible list).
    // This is what actually makes the task appear on the page.
    ul.appendChild(li);

    // 5️⃣ Clean up: empty the input field...
    input.value = '';

    // ...and hide the "Add" button again (since input is empty now).
    addButton.style.display = 'none';
}

// ============================================================
// 📌 STEP 3: SHOW/HIDE THE "ADD" BUTTON BASED ON INPUT
// ============================================================
// This event fires EVERY time the user types or deletes a character.
// We use it to show the "Add" button only when there's text.

input.addEventListener('input', function () {
    // If the input has at least one non-space character...
    if (input.value.trim().length > 0) {
        // ...show the Add button.
        addButton.style.display = 'inline-block';
    } else {
        // Otherwise, hide it.
        addButton.style.display = 'none';
    }
});

// ============================================================
// 📌 STEP 4: ADD TASK WHEN THE BUTTON IS CLICKED
// ============================================================
// When the user clicks "Add Task", run the addTask() function.

addButton.addEventListener('click', addTask);

// ============================================================
// 📌 STEP 5: ADD TASK WHEN THE "ENTER" KEY IS PRESSED
// ============================================================
// This lets the user press Enter (instead of clicking the button)
// to add a task. We listen on the whole document so it works
// no matter where the user is focused.

document.addEventListener('keydown', function (event) {
    // 'event.key' tells us WHICH key was pressed.
    if (event.key === 'Enter') {
        // preventDefault() stops the browser's default Enter behavior
        // (like submitting a form or creating a new line).
        event.preventDefault();

        // Run the same addTask() function we defined above.
        addTask();
    }
});

// ============================================================
// 📌 STEP 6: DELETE A TASK WHEN ITS DELETE BUTTON IS CLICKED
// ============================================================
// 🧠 CONCEPT: EVENT DELEGATION
// Instead of adding a separate click listener to EACH delete button
// (which would be slow if we had 100 tasks), we add ONE listener
// to the parent <ul>. When a delete button is clicked, the event
// "bubbles up" to the <ul>, and we handle it here.

ul.addEventListener('click', function (event) {
    // 'event.target' = the EXACT element that was clicked.
    // We check if that element has the class 'delete-btn'.
    if (event.target.classList.contains('delete-btn')) {
        // If yes, go UP one level (parentElement) to find the <li>...
        // ...and remove the entire <li> (task + its button).
        event.target.parentElement.remove();
    }
});
