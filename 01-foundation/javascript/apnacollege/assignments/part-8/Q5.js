// ============================================================
// Qs5. Write a function called mergeObjects that accepts two objects and returns a new
// object which contains all the keys and values of the first object and thesecond object.
// ============================================================

// In simple words: Write a function to combine two objects into one.

const userProfile = {
    name: 'Kaushal Prajapati',
    age: 20,
};

const userCredentials = {
    username: 'kaushalxprajapati',
    password: 'ABCD123456',
};

// -------------------------------------------
// Using Arrow Function (Industry Standard)
// -------------------------------------------

// SYNTAX NOTE: We must wrap the object {} in parentheses ({ ... }) otherwise JS thinks the {} is the function body block!
const mergeObjects = (obj1, obj2) => ({ ...obj1, ...obj2 });

console.log('Merged Object:', mergeObjects(userProfile, userCredentials));
