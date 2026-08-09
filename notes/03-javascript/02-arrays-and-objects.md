# JavaScript Arrays & Objects

Arrays store ordered lists of values, while Objects store key-value pairs.

---

## 1. Array Methods

```javascript
const numbers = [1, 2, 3, 4, 5];

// 1. Array.map(): Transforms each element and returns new array
const doubled = numbers.map(num => num * 2); // [2, 4, 6, 8, 10]

// 2. Array.filter(): Filters elements based on condition
const evens = numbers.filter(num => num % 2 === 0); // [2, 4]

// 3. Array.reduce(): Accumulates array into single value
const sum = numbers.reduce((total, num) => total + num, 0); // 15

// 4. Array.forEach(): Iterates over items without returning new array
numbers.forEach(num => console.log(num));

// 5. Array.find(): Returns first element matching condition
const found = numbers.find(num => num > 3); // 4
```

---

## 2. Objects & Methods

```javascript
const user = {
    firstName: "Kaushal",
    role: "Frontend Developer",
    skills: ["HTML", "CSS", "JavaScript", "React"],
    greet() {
        return `Hi, I am ${this.firstName}`;
    }
};

console.log(user.firstName); // Dot notation
console.log(user["role"]);    // Bracket notation
console.log(user.greet());   // Calling object method
```

---

## 3. Destructuring & Spread Operator (ES6)

### Object Destructuring
```javascript
const { firstName, role } = user;
console.log(firstName, role);
```

### Array Destructuring
```javascript
const colors = ["Red", "Green", "Blue"];
const [primary, secondary] = colors;
```

### Spread Operator (`...`)
```javascript
// Copying/Combining Arrays
const arr1 = [1, 2];
const arr2 = [3, 4];
const combined = [...arr1, ...arr2]; // [1, 2, 3, 4]

// Copying/Updating Objects
const updatedUser = { ...user, location: "India" };
```
