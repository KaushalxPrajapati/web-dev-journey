# Level 01: React Basics & JSX Foundations

This folder contains the fundamental building blocks of React: JSX syntax, module exports, variable interpolation, rendering objects, and rendering dynamic lists.

---

## 1. Module Exports & Imports (`ExportFunctions.jsx`)

JavaScript ES6 gives us two primary ways to share code between files:

### A. Named Exports

- Use when a file exports **multiple utility functions or values**.
- Must be imported using **exact matching names inside curly braces `{}`**.

```javascript
// In ExportFunctions.jsx:
export function add(a, b) {
    return a + b;
}
export function multiply(a, b) {
    return a * b;
}

// In App.jsx:
import { add, multiply } from './ExportFunctions.jsx';
```

### B. Default Exports

- Use when a file exports **one main component**.
- Imported **without curly braces**, and can be renamed upon import.

```javascript
// In SayHello.jsx:
export default function SayHello() { ... }

// In App.jsx:
import SayHello from './SayHello.jsx';
```

> **⚠️ Common Trap:** Trying to import a named export without curly braces (`import add from './ExportFunctions'`) results in `undefined` or a runtime crash.

---

## 2. JSX & Variable Interpolation (`SayHello.jsx`)

JSX (_JavaScript XML_) lets us write HTML-like markup directly inside JavaScript.

### Core Rules:

1. **Single Root Element:** Every component must return one single parent element. Use React Fragments `<> ... </>` to group multiple elements without adding unnecessary `<div>` nodes to the DOM.
2. **Expressions Inside `{}`:** Single curly braces open "JavaScript Mode" inside JSX. You can put variables, math, ternary operators, or function calls inside `{}`.
    ```jsx
    <h1>Hello, {userName.toUpperCase()}</h1>
    <p>Result: {5 + 10}</p>
    ```
3. **Statements are NOT Allowed Inside `{}`:** You cannot put `if`, `for`, or `while` inside `{}` because they do not return a value. Use ternary operators `? :` or array methods (`.map()`) instead.
4. **Inline Styles as Objects `{{ }}`:**
    - The outer `{}` tells JSX: _"Evaluate this JavaScript expression."_
    - The inner `{}` is a standard JavaScript object containing style rules.
    - Property names are **camelCase** (e.g. `backgroundColor` instead of `background-color`).
    ```jsx
    <h1 style={{ color: 'green', fontSize: '20px' }}>Hello</h1>
    ```

---

## 3. Rendering Objects (`CarsObject.jsx`)

In React, you **cannot** render a raw JavaScript object directly inside JSX.

```jsx
const car = { make: 'Fiat', model: '500' };

// ❌ CRASHES: "Objects are not valid as a React child"
// <h1>{car}</h1>

// ✅ CORRECT: Access primitive properties (strings, numbers)
<h1>
    {car.make} {car.model}
</h1>;
```

---

## 4. Rendering Lists & The `key` Prop (`CarsList.jsx`)

To render an array of items in React, transform the array into JSX elements using JavaScript's `.map()` method.

```jsx
const cars = ['Ford', 'BMW', 'Audi'];

<ul>
    {cars.map((car) => (
        <li key={car}>{car}</li>
    ))}
</ul>;
```

### Why is the `key` prop mandatory?

- React uses virtual DOM diffing to figure out what changed between renders.
- The `key` serves as a permanent ID for each list item.
- When an item is added, deleted, or reordered, React uses the `key` to move or update only that specific DOM node, instead of re-rendering the entire list.

### ⚠️ The Index-as-Key Trap:

- Avoid using array index (`key={index}`) if your list can ever be filtered, sorted, or reordered.
- If items shift positions, index keys cause React to update the wrong elements or mix up input states. Always prefer a unique string or database ID (`key={item.id}`).
