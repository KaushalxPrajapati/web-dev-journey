// ============================================================
// DOM MANIPULATION: REMOVING ELEMENTS
// ============================================================

// ------------------------------------------------------------
// METHOD 1: .remove() (Modern & Clean)
// Best when you want to delete the element directly.
// ------------------------------------------------------------
let h4 = document.querySelector('h4');
h4.remove();
console.log('Header deleted.');

// ------------------------------------------------------------
// METHOD 2: .removeChild() (Parent-Child Relationship)
// Best when you only have the parent and the index.
// ------------------------------------------------------------
let list = document.querySelector('ul');

// // Option A: Using removeChild (The "Kick out" method)

// list.removeChild(list.children[2]);
// console.log("3rd List Item deleted. Removed using 'removeChild' method");


// Option B: Using .remove() on the child (The "Self-Destruct" method)

let thirdItem = list.children[2]; // Select 3rd item (Index 2)
if (thirdItem) {
    thirdItem.remove();
    console.log("3rd List Item deleted. Removed using '.remove()' method");
}
