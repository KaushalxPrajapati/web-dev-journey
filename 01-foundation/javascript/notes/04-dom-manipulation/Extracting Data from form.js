// ============================================================
// FORM DATA EXTRACTION (Production Style)
// ============================================================

// Select the form once
const form = document.querySelector('form');

form.addEventListener('submit', function (event) {
    // CRITICAL: Stop the page from refreshing
    event.preventDefault();

    // ----------------------------------------------------
    // ACCESSING DATA VIA 'form.elements'
    // ----------------------------------------------------
    // PREREQUISITE: Your HTML inputs must have 'name' attributes.
    // Example: <input name="user" ... > and <input name="pass" ... >

    // WHY THIS IS BEST:
    // 1. Decoupled: It doesn't rely on the order of inputs (unlike index [0]).
    // 2. Scoped: It strictly finds inputs belonging to THIS form.
    // 3. Clean: No need for separate 'querySelector' variables for every field.

    const username = form.elements.user.value;
    const password = form.elements.pass.value;

    console.log('Username is:', username);
    console.log('Password is:', password);
});
