// ============================================================
// JAVASCRIPT `this` BINDING + METHODS + ARROW FUNCTIONS
// ============================================================

// ---------------------------
// OBJECT METHOD: CORRECT
// ---------------------------

const person1 = {
    firstName: 'Kaushal',
    lastName: 'Prajapati',

    // Method 1: Normal Function / Function Expression
    // Dynamic `this` binding -> `this` refers to the caller ('person1')
    fullName: function () {
        return this.firstName + ' ' + this.lastName;
    },
};

console.log('Person 1:', person1.fullName()); // Output: Kaushal Prajapati

const person2 = {
    firstName: 'Bruce',
    lastName: 'Wayne',

    // Method 2: ES6 Method Shorthand (Industry Standard)
    // Syntactic sugar for normal function. Behaves exactly like Method 1.
    fullName() {
        return this.firstName + ' ' + this.lastName;
    },
};

console.log('Person 2:', person2.fullName()); // Output: Bruce Wayne


// ---------------------------
// OBJECT METHOD: WRONG
// ---------------------------

const person3 = {
    firstName: 'Tony',
    lastName: 'Stark',

    // ❌ WRONG: Arrow function as object method
    // Arrow functions DO NOT bind `this` to the object.
    // They inherit `this` from the outer scope (Window/Global), where firstName is undefined.
    fullName: () => {
        return this.firstName + ' ' + this.lastName;
    },
};

console.log('Person 3:', person3.fullName()); // Output: undefined undefined


// ---------------------------
// VARIABLE vs PROPERTY (Crucial Distinction)
// ---------------------------

const example = {
    firstName: 'John',
    lastName: 'Doe',

    // ❌ WRONG: firstName and lastName are NOT variables.
    // Accessing properties without `this` looks for variables in the scope (which are not defined).
    wrongMethod: function () {
        // console.log(firstName); // ReferenceError: firstName is not defined
    },

    // ✅ CORRECT: `this` tells JS to look INSIDE the object where we defined them.
    correctMethod: function () {
        console.log(this.firstName, this.lastName);
    },
};

example.wrongMethod();
example.correctMethod();


// ============================================================
// ⚠️ WARNING (ARCHITECTURAL RULE)
// ============================================================

// 1. NEVER use arrow functions as top-level/main object methods when the method depends on `this`.
// 2. RULE:
//    If you need `this` (Object Context) → Use Normal Function (or Shorthand).
//    If you need Logic (Calculations)    → Use Arrow Function.


// ============================================================
// ✅ WHERE ARROW FUNCTIONS SHOULD BE USED
// ============================================================

// 1. Callbacks (Timers, Event Listeners)
setTimeout(() => {
    console.log('Callback executed');
}, 1000);   // After the Delay of 1 second

// 2. Array Methods (One-liners)
const nums = [1, 2, 3, 4];
const squares = nums.map((n) => n * n);
console.log(squares);

// 3. Nested Functions (The "Context Keeper")
//    Problem: Normal functions inside a method "forget" who `this` is.
//    Solution: Arrow functions inside a method "remember" the parent's `this`.

const timerObject = {
    name: 'Timer',
    start: function () {    // Top-level method defined using normal function expression
        setTimeout(() => {  // ✅ Arrow function here inherits `this` from `start` (which is `timerObject`)
            console.log(this.name + ' finished');
        }, 2000);   // After the Delay of 2 second
    },
};
timerObject.start(); // Output: "Timer finished"


// ============================================================
// 🧠 CORE MENTAL MODEL
// ============================================================

// Normal Function / Method:
// - Dynamic `this` (Changes based on who calls it)
// - Identity-bound (I am the Object)
// - Best for: Object Actions

// Arrow Function:
// - Lexical `this` (Fixed at birth based on where it sits)
// - Context-independent
// - Best for: Passing Logic / Math / Loops