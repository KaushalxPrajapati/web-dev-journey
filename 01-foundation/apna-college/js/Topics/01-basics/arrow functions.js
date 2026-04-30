// =====================================================
// TOPIC: Modern JavaScript Arrow Functions Syntax (ES6)
// =====================================================

// -----------------------------------------------------
// PART 1: Arrow Functions Basic Syntax (Explicit Return)
// -----------------------------------------------------

const sum = (a, b) => {
    // Basic Arrow Function with a body block
    return a + b;
};

const cube = (a) => {
    // Single parameter arrow function
    return a ** 3;
};

const pow = (a, b) => {
    return a ** b;
};

console.log(sum(2, 2));
console.log(cube(4));
console.log(pow(2, 3));

// -----------------------------------------------------
// PART 2: Implicit Return (The "One-Liner")
// -----------------------------------------------------
// RULE: If the function body is a SINGLE line, we can remove:
// 1. The 'return' keyword
// 2. The curly braces {}
// NOTE: We often use 'const' to prevent overwriting the function.
// These lines DEFINE the logic. The logging happens at the bottom.
const sqr = (a) => a ** 2; // Auto-returns the result

const multi = (a, b) => a * b; // Auto-returns the result

const div = (a, b) => a / b; // Auto-returns the result

console.log(sqr(5));
console.log(multi(4, 5));
console.log(div(24, 2));

// ---------------------------------------------------------
// PART 3: Arrow Functions inside Methods ('this' Keyword)
// ---------------------------------------------------------

// KEY CONCEPT: "Lexical Scoping"
// 1. Regular Functions: 'this' depends on WHO calls the function.
// 2. Arrow Functions:   'this' depends on WHERE the function sits (Parent Scope).

// --- BUILDING BLOCK A: THE WARNING (The Wrong Way. Don't use Arrows for methods) ---
// Since Arrow Functions don't have their own 'this', using them as a top-level or main method fails.
const student = {
    name: 'Student 1',

    // WRONG: Arrow Function looks at Global Scope (Window), not the object.
    getName: () => {
        console.log(this.name); // Output: undefined or blank
    },

    // CORRECT: Regular Function looks at the Object (student).
    getNameCorrect: function () {
        console.log(this.name); // Output: "Student 1"
    },
};
student.getName();
student.getNameCorrect();

// --- BUILDING BLOCK B: THE PROBLEM ---
// Why do we need Arrow Functions inside timers?
// Because a Regular Function inside setTimeout forgets who called it.
const employee1 = {
    name: 'Employee 1',
    job: 'Software Engineer',
    profile: function () {
        // Parent Method must use a Regular Function to establish the 'this' scope.
        setTimeout(function () {
            // ERROR: This function is an "orphan". It points to Window, not employee
            console.log(`Employee Name: ${this.name}`); // Output: "Employee name:   *blank* "
        }, 1000);
    },
};
employee1.profile();

// --- BUILDING BLOCK C: THE SOLUTION (The "Backpack") ---
// We use an ARROW function inside the timer.
// It "inherits" the 'this' from its parent (profile), so it remembers the user. On the other hand, regular functions do not remember.

const employee2 = {
    name: 'Kaushal Prajapati',
    job: 'Software Engineer',
    profile: function () {
        // Inner Function (Callback): We use an ARROW function here.
        // WHY? Arrow functions don't have their own 'this'.
        // They "inherit" the 'this' from the parent (profile), so it stays linked to the object.
        setTimeout(() => {
            console.log(`Employee name: ${this.name}`); // Output: "Employee name: Kaushal Prajapati"
        }, 1000);
    },
};
employee2.profile(); // Output: "Employee name: Kaushal Prajapati" (after 1 second)
