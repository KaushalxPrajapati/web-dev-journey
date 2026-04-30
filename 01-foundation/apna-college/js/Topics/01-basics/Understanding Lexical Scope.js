// 1. A variable 'greet' is created in the global scope.
let greet = 'Hello';

function changeGreet() {
    // 3. A NEW variable 'greet' is created in this function's local scope.
    //    This "shadows" (hides) the global 'greet' variable *inside* this function.
    let greet = 'Namaste';

    // 4. This prints the local 'greet', which is "Namaste".
    console.log(greet);

    function innerGreet() {
        // 6. This function looks for 'greet' in its own scope. It doesn't find it.
        //    Due to lexical scope, it looks in its parent's scope (changeGreet's scope).
        //    It finds 'greet' with the value "Namaste".
        console.log(greet);
    }

    // 5. The innerGreet function is called.
    innerGreet();
}

// 2. This console.log runs first. It prints the global 'greet', which is "Hello".
console.log(greet);

// 3. The changeGreet() function is called, starting its steps.
changeGreet();
