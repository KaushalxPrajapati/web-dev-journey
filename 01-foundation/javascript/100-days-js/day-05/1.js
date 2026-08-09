// =============================================================================
// Question: Create a function that takes a person's name and prints it
// =============================================================================

function greet(name) {
    name = name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
    return 'Hello' + ' ' + name + '!';
}

console.log(greet('shradha'));
