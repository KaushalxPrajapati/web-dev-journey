// ============================================================
// TOPIC: The Spread Operator (...)
// Purpose: Expands an iterable (Array/String) into individual elements.
// Usage: Cloning, Merging, and Type Conversion.
// ============================================================

// ------------------------------------------------------------
// 1. SPREAD WITH ARRAYS (Cloning)
// ------------------------------------------------------------

let array1 = [1, 2, 3, 4, 5];
let newArray = [...array1]; // Create a copy (Not a reference!)
console.log('Copied Array:', newArray);

// PROOF: Modifying newArray does NOT affect the old one.
newArray.push(7);
console.log('Old Array:', array1); // [1, 2, 3, 4, 5] (It is Safe)
console.log('New Array:', newArray); // [1, 2, 3, 4, 5, 7] (It is Modified)

// ------------------------------------------------------------
// 2. SPREAD WITH STRINGS (String -> Array)
// ------------------------------------------------------------

let str1 = 'hello';

// Breaks string into individual characters
let charArray = [...str1];

console.log(charArray); // Output: ['h', 'e', 'l', 'l', 'o']

// ------------------------------------------------------------
// 3. SPREAD WITH OBJECTS (Cloning & Merging)
// ------------------------------------------------------------

const data = {
    name: 'Kaushal',
    email: 'abcd@gmail.com',
    password: '123456',
};

console.log('Original Object:', data);

// LOGIC: Copies all properties from 'data' AND adds 'age'.
// Note: If 'age' already existed in data, this would OVERWRITE it.
const dataCopy = { ...data, age: 20 };

console.log('Copied Object:', dataCopy);

// ⚠️ THE TRAP: Key Conflicts (The Overwrite Rule)
// If both objects have the SAME key, the LAST one wins use only if you have different keys in the objects you want to combine or merge

const objA = {
    name: 'Kaushal',
    age: 20,
    role: 'Student',
};

const objB = {
    name: 'Mr. K', // Here 'name' conflicts
    role: 'CEO', // Here 'role' conflicts
};

function mergeObjects(obj1, obj2) {
    return { ...obj1, ...obj2 }; // Usage: Spread both objects inside a NEW object literal {} and return it without storing.
}

console.log(mergeObjects(objA, objB));

// ------------------------------------------------------------
// 4. ADVANCED: ITERABLE TO OBJECT (The Index Trick)
// ------------------------------------------------------------

// Spreading an Array into an Object{}
// Result: Indexes become Keys, Elements become Values.
let array2 = [1, 2, 3, 4, 5];
let object1 = { ...array2 };

console.log(object1); // Output: {0: 1, 1: 2, 2: 3, 3: 4, 4: 5}

// Spreading a String into an Object{}
let str2 = 'hello';
let object2 = { ...str2 };

console.log(object2); // Output: {0: 'h', 1: 'e', 2: 'l', 3: 'l', 4: 'o'}

// ============================================================
// ⚠️ CRITICAL WARNING: SHALLOW COPY
// ============================================================
// The Spread operator does a SHALLOW COPY.
// If your array has *nested* objects (e.g., [{id: 1}]),
// the nested objects are still references!

// Example:
// let nested = [{ a: 1 }];
// let copy = [...nested];
// copy[0].a = 99; // THIS WILL CHANGE THE ORIGINAL TOO!
