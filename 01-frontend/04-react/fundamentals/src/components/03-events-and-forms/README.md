# Level 03: Events & Forms Handling

This folder covers user interactions in React: click events, double click events, the SyntheticEvent wrapper, form submissions, and `event.preventDefault()`.

---

## 1. Event Handling in React (`Button.jsx`)

React uses **camelCase** for event attributes (`onClick`, `onDoubleClick`, `onChange`, `onSubmit`) instead of lowercase HTML names (`onclick`).

### Passing Function References vs. Invocations

This is one of the most common beginner traps in React:

```jsx
// ❌ WRONG: Invokes the function immediately on render!
<button onClick={handleClick()}>Click</button>

// ✅ CORRECT: Passes the function reference to be called upon user click
<button onClick={handleClick}>Click</button>

// ✅ CORRECT: If you need to pass arguments, wrap in an arrow function:
<button onClick={() => handleDelete(user.id)}>Delete</button>
```

---

## 2. What is a SyntheticEvent?

When you handle an event in React:
```jsx
const handleClick = (event) => {
    console.log(event.type); // 'click'
};
```
- `event` is not the raw browser DOM event.
- It is a **SyntheticEvent** — a cross-browser wrapper created by React around the native browser event.
- It ensures your event handling works identically across Chrome, Firefox, Safari, and Edge.

---

## 3. Form Handling & Preventing Page Reloads (`Forms.jsx`)

In traditional HTML, submitting a form sends an HTTP POST request and reloads the entire page:

```jsx
const handleFormSubmit = (event) => {
    // 1. MUST call this to prevent the browser from reloading the page
    event.preventDefault();

    // 2. Read values from form elements
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData.entries());
    console.log(data);
};

return (
    <form onSubmit={handleFormSubmit}>
        <input name="username" type="text" />
        <button type="submit">Submit</button>
    </form>
);
```

---

## ⚠️ Common Beginner Traps:
- ❌ **Forgetting `event.preventDefault()` on form submit:** The browser will reload the page and wipe out your React state!
- ❌ **Putting parent-child click handlers without `e.stopPropagation()`:** If both parent and child have `onClick`, clicking the child will bubble up to the parent.
