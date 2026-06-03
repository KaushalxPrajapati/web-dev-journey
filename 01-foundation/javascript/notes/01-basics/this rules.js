// ==================================================================
// TOPIC: The 'this' Keyword Context & Object Methods
// ==================================================================

// CORE CONCEPTS:
// 1. Regular Functions: 'this' depends on WHO calls the function (Dynamic).
// 2. Arrow Functions:   'this' depends on WHERE the function sits (Lexical / Parent).
// ==================================================================

const student = {
    firstName: 'Kaushal',
    lastName: 'Prajapati',

    // CASE 1: The Global Scope Trap
    // 'this' inside an object definition (but outside a function) refers to the Global/Window object.
    // Why? Because object curly braces { } do not create a new scope.
    prop: this,

    // CASE 2: Regular Function (Dynamic Scope)
    // 'this' refers to the object calling the function (here, 'student').
    getFirstName: function () {
        console.log("Regular Function 'this':", this); // Prints the 'student' object
        return this.firstName;
    },

    // CASE 3: Arrow Function (Lexical Scope)
    // 'this' refers to the Parent Scope (Window). It ignores the 'student' object completely.
    getLastName: () => {
        console.log("Arrow Function 'this':", this); // Prints the Window object
        return student.lastName; // FIX: We must use the object name 'student' explicitly.
    },
};

// --------------------------
// EXECUTION & OUTPUT
// --------------------------

// 1. PROOF OF CASE 1 (The Global Trap)
// This proves that 'this' was captured as Window during object creation.
console.log('Global Property Check:', student.prop); // Output: Window Object

console.log('\n'); // (Line Break)
// 2. Regular Function Behavior
// Context: 'student' calls the function, so 'this' = student.
console.log('First Name:', student.getFirstName()); // Output: "Kaushal"

console.log('\n'); // (Line Break)

// 3. Arrow Function Behavior
// Context: Arrow function looks outward to Window.
console.log('Last Name:', student.getLastName()); // Output: "Prajapati"
