// ==============================================
// 1st Method: Traditional Function Declaration
// ==============================================

function sayHello() {
    console.log('Hello');
}

// WRONG: setTimeout(sayHello(), 1500); -> Runs immediately(Right now)
// CORRECT: Remove the () to pass the function "Reference".
setTimeout(sayHello, 1500);

// ==============================================
// 2nd Method: Arrow Function stored in a Variable
// ==============================================

const giveIntro = () => {
    console.log('I am Kaushal');
};
setTimeout(giveIntro, 3000); // CORRECT: Passing the variable name (The reference)

// =============================================================
// 3rd Method: Direct Anonymous Arrow Function (Industry Standard)
// =============================================================

// CORRECT: Defining the function directly inside the timer.
setTimeout(() => {
    console.log('Nice to meet you');
}, 4500);
