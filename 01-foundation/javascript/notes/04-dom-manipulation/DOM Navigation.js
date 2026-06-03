// Starting Point: We select the "ul"
let list = document.querySelector('ul');

// -------------
// YOUR TASK:
// -------------

// 1. Go UP: Log the Parent of the ul (Should be the div.box)
let tag = list.parentElement;
console.log(tag);

// 2. Go DOWN: Log the 3rd child of the ul (Item 3)
let thirdListItem = list.children[2];
console.log(thirdListItem);

// 3. Go SIDEWAYS: Select the <h4> tag by navigating from the 'list' variable.
// (Hint: The h4 is the "Previous Sibling" of the ul)
let h4 = list.previousElementSibling;
console.log(h4);