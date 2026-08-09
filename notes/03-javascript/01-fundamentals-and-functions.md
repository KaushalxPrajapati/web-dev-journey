# JavaScript Fundamentals & Functions

JavaScript is a lightweight, interpreted, object-oriented programming language used for web interactivity.

---

## 1. Variables (`var`, `let`, `const`)

```javascript
// const: Cannot be reassigned, block-scoped (Default choice)
const name = 'Kaushal';

// let: Reassignable, block-scoped
let age = 22;
age = 23;

// var: Function-scoped / globally-scoped (Avoid using in modern JS)
var country = 'India';
```

---

## 2. Primitive Data Types

```javascript
const str = "Text string";    // String
const num = 42;               // Number
const isDev = true;           // Boolean
let unassigned;              // Undefined
const emptyVal = null;        // Null
const sym = Symbol('id');     // Symbol
const bigIntNum = 9007199254740991n; // BigInt
```

---

## 3. Functions in JS

### Function Declaration
```javascript
function greet(user) {
    return `Hello, ${user}!`;
}
console.log(greet("Kaushal"));
```

### Function Expression
```javascript
const add = function(a, b) {
    return a + b;
};
```

### Arrow Functions (ES6)
```javascript
// Concise single-expression implicit return
const multiply = (a, b) => a * b;

// Multi-line arrow function
const calculateTotal = (price, tax) => {
    const total = price + (price * tax);
    return total;
};
```

---

## 4. Scope & Hoisting

- **Global Scope**: Accessible everywhere.
- **Function Scope**: Defined inside a function, accessible only within it.
- **Block Scope (`let`/`const`)**: Variables inside `{}` are accessible only inside that block.
- **Hoisting**: Declarations (`var`, `function`) are moved to the top of their scope before code execution.
