# Node.js Modules & Package Management

Node.js is an open-source, cross-platform JavaScript runtime environment that executes JS code outside a web browser.

---

## 1. Modules (CommonJS vs. ES Modules)

### CommonJS (`require` / `module.exports`)
```javascript
// math.js
function add(a, b) {
    return a + b;
}
module.exports = { add };

// index.js
const { add } = require('./math.js');
console.log(add(5, 10));
```

### ES Modules (`import` / `export`)
```javascript
// math.js (Set "type": "module" in package.json)
export function add(a, b) {
    return a + b;
}

// index.js
import { add } from './math.js';
console.log(add(5, 10));
```

---

## 2. Built-in Core Modules

```javascript
// Path module
const path = require('path');
const fullPath = path.join(__dirname, 'uploads', 'file.txt');

// File System module
const fs = require('fs');

// Asynchronous file reading
fs.readFile('example.txt', 'utf8', (err, data) => {
    if (err) throw err;
    console.log(data);
});
```

---

## 3. Package Management with NPM

```bash
# Initialize new package.json configuration file
npm init -y

# Install package as production dependency
npm install express

# Install package as development dependency
npm install -D nodemon

# Uninstall package
npm uninstall express
```
