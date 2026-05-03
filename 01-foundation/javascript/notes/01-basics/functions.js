//--------------------------------------
// 1. Using Regular Functions
//--------------------------------------
function sum(a, b) {
    console.log("The sum is:", a + b);
}
sum(2, 2);

//--------------------------------------
// 2. Simple functions with return
//--------------------------------------

function multi(a, b) {
    return a * b;
}
console.log("The multiplication is:", multi(3, 4));

//----------------------------------------------
// 3. Functions with arguments (Parameters can be one or more)
//----------------------------------------------

function printInfo(name, age) {
    // 'name' and 'age' act as local variables inside this function
    console.log(`I am ${name} and I am ${age} years old`);
}
// Calling the function with arguments (The actual values)
printInfo("Kaushal", 20);

//------------------------------------------------------
// 4. Functions with arguments(Input) and returns(output)
//------------------------------------------------------

function fullName(firstName, lastName) {
    // Concatenates the first name, a space, and the last name
    return firstName + " " + lastName;
}
// Calling the function and logging the returned value
console.log("Full name:", fullName("John", "Doe")); // Output: Full name: John Doe

//-------------------------------------------------------------------------------------------
// 5. Storing function in a variable (Function Expression)
//-------------------------------------------------------------------------------------------

// NOTE: This is an "Anonymous Function" because the function itself has no name
let add = function (a, b) {
    return a + b;
};
console.log("Function Expression Sum:", add(5, 5));

//----------------------------------------------------------------------
// 6. Higher-Order Functions (Callbacks)
//----------------------------------------------------------------------
// CONNECTION TO PART 5: Just like we stored a function in a variable ('add'),
// we can also pass a function directly as an argument to another function.

// 'setInterval' is a Higher-Order Function.
// The Arrow Function inside it is the "Callback" (The Logic).

let count = 0; // State Initialization

const id = setInterval(() => {
    console.log("Hello World");
    count++;

    // Stop condition
    if (count === 5) {
        clearInterval(id);
        console.log("Process Stopped."); // Added for visual confirmation
    }
}, 2000);

//-------------------------------------------------
// 7. Using Regular Functions in Objects (Methods)
//-------------------------------------------------

// Method 1: The Standard Way (Key: Function)
const person1 = {
    firstName: "Kaushal",
    lastName: "Prajapati",
    fullName: function () {
        // 'this' refers to the owner object i.e person1 here
        console.log(`${this.firstName} ${this.lastName}`);
    },
};
// Called by 'object'.functionname() here it's person1.fullName)
person1.fullName(); // Output: Kaushal Prajapati

// Method 2: Object Literal Method Shorthand (Cleaner Syntax)
const person2 = {
    name: "Alice",
    // We removed the ":" and "function" keyword here
    greet() {
        console.log(`Hello, my name is ${this.name}`);
    },
};
person2.greet(); // Output: Hello, my name is Alice

// Method 3: Shorthand with Arguments
const myObject = {
    sum(a, b) {
        return a + b;
    },
    multiply(a, b) {
        return a * b;
    },
};

console.log(myObject.sum(7, 3)); // Output: 10
console.log(myObject.multiply(6, 7)); // Output: 42
