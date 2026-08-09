# DOM Manipulation & Event Handling

The Document Object Model (DOM) represents HTML as a tree structure that JavaScript can dynamically inspect and modify.

---

## 1. Selecting Elements

```javascript
// Single element selection
const title = document.querySelector('#main-title');
const header = document.getElementById('header');

// Multiple elements selection (NodeList)
const buttons = document.querySelectorAll('.btn');
```

---

## 2. Modifying Content & Styles

```javascript
const heading = document.querySelector('h1');

// Update text
heading.textContent = 'Updated Heading Text';

// Modify CSS styles
heading.style.color = 'royalblue';
heading.style.fontSize = '2rem';

// Modify classes
heading.classList.add('active');
heading.classList.remove('hidden');
heading.classList.toggle('highlight');
```

---

## 3. Event Handling

Events listen for user actions (clicks, keypresses, input changes).

```javascript
const btn = document.querySelector('#submit-btn');

btn.addEventListener('click', (event) => {
    event.preventDefault(); // Prevents default form submission page reload
    console.log('Button clicked!');
});
```

### Common Event Types:
- `click`: Triggers when element is clicked.
- `submit`: Triggers when a form is submitted.
- `keydown` / `keyup`: Triggers on keyboard key actions.
- `change`: Triggers when input element value changes.
