# React Todo List - Complete Guide with Mark Done & Delete Features

## 🎯 Overview

This is a fully functional Todo List built with React that includes:

- Adding new tasks
- Marking tasks as Done / Undone
- Deleting tasks
- Beautiful conditional styling (strikethrough, color changes, hover effects)
- Responsive design using Bootstrap + custom CSS

---

## 📋 Current Task Structure

```javascript
{
    task: "Buy groceries",     // The actual task text
    id: "abc-123-def-456",     // Unique identifier (UUID)
    isDone: false              // Boolean: true = completed, false = active
}
```

---

## 🔧 Core State Management

### 1. Task List State

```javascript
const [task, setTask] = useState([]);
```

- Holds **all** todo items
- Starts as empty array `[]`
- Updated using `setTask()`

### 2. Input Field State

```javascript
const [newTodo, setNewTodo] = useState('');
```

- Holds what user is currently typing
- Cleared after adding a task

---

## 🛠️ Main Functions Explained

### `addTask()` - Adding a New Task

```javascript
function addTask() {
    if (newTodo.trim() === '') return;

    const newTaskObject = {
        task: newTodo,
        id: uuidv4(),
        isDone: false,
    };

    setTask([...task, newTaskObject]);
    setNewTodo('');
}
```

**Step-by-step:**

1. Check if input is empty (using `.trim()`)
2. Create new task object with unique ID
3. Add to list using spread operator (`...`)
4. Clear input field

---

### `updateTask()` - Handling Input Changes

```javascript
function updateTask(event) {
    setNewTodo(event.target.value);
}
```

- Runs every time user types in the input
- Keeps React state in sync with what user sees

### `handleSubmit()` - Form Handling

```javascript
function handleSubmit(event) {
    event.preventDefault();
}
```

- Prevents page reload when pressing Enter

---

### `markDone()` - Toggle Completed Status

```javascript
function markDone(taskId) {
    const updatedTasks = task.map((t) => {
        if (t.id === taskId) {
            return {
                ...t,
                isDone: !t.isDone,
            };
        } else {
            return t;
        }
    });

    setTask(updatedTasks);
}
```

**Key Concepts:**

- Uses `.map()` to create a **new** array (immutable update)
- `...t` = spread operator to copy task object
- `!t.isDone` = toggles boolean (`true` ↔ `false`)
- Only the matching task is updated

---

### `removeTask()` - Delete a Task

```javascript
function removeTask(taskId) {
    const updatedTasks = task.filter((t) => t.id !== taskId);
    setTask(updatedTasks);
}
```

**How filter works:**

- Keeps only tasks where `id` does **not** match the one to delete
- Creates a new array without the deleted item

---

## 🎨 JSX Structure & Conditional Rendering

### Task List Rendering

```jsx
{
    task.map((t) => {
        let liClassName = 'single-task';
        if (t.isDone === true) {
            liClassName += ' done';
        }

        // Conditional button styling & text
        let markDoneButtonClassName = t.isDone ? 'btn btn-success mx-4' : 'btn btn-outline-secondary mx-4';

        let markDoneButtonText = t.isDone ? 'Mark as Undone' : 'Mark as Done';

        return (
            <li key={t.id} className={liClassName}>
                {t.task.charAt(0).toUpperCase() + t.task.slice(1)}

                <button className={markDoneButtonClassName} onClick={() => markDone(t.id)}>
                    {markDoneButtonText}
                </button>

                <button className="btn btn-danger mx-4" onClick={() => removeTask(t.id)}>
                    Delete
                </button>
            </li>
        );
    });
}
```

**Important:**

- `key={t.id}` → Required for React lists
- Capitalizes first letter of task text
- Conditional classes and button text based on `isDone`

---

## 🎨 CSS Highlights

### Completed Task Styling

```css
li.done {
    text-decoration: line-through;
    color: #888;
    opacity: 0.7;
}

li.done .btn.btn-danger {
    display: none; /* Hide delete when done */
}
```

### Hover Effects

```css
li .btn.btn-danger {
    opacity: 0; /* Hidden by default */
    transition: opacity 0.25s ease;
}

li:hover .btn.btn-danger {
    opacity: 1; /* Show on hover */
}
```

### Input & Button Polish

- Rounded input with focus effect
- Hover animations on buttons (`translateY`)
- Professional Bootstrap integration

---

## 🔄 Full User Flow

1. **Type task** → `newTodo` state updates
2. **Press Add** → `addTask()` creates object → `setTask()`
3. **Mark Done** → `markDone()` toggles `isDone` → re-render with strikethrough
4. **Delete** → `removeTask()` filters out task → list updates

---

## 🧠 Key React Concepts Used

| Concept               | How Used Here                     | Why Important         |
| --------------------- | --------------------------------- | --------------------- |
| `useState`            | Manage tasks & input              | Enables reactivity    |
| Spread Operator `...` | Adding tasks & updating objects   | Immutable updates     |
| `.map()`              | Rendering list & updating tasks   | Creates new arrays    |
| `.filter()`           | Deleting tasks                    | Removes items cleanly |
| Conditional Rendering | Button text, classes, styling     | Dynamic UI            |
| `key` prop            | In task list                      | Efficient re-renders  |
| Event Handlers        | `onChange`, `onClick`, `onSubmit` | User interaction      |

---

## 📁 Project Files

- `TodoList.jsx` → Main React component (with comments)
- `TodoList.css` → All styling
- `TodoList_Complete_Guide.md` → **This file** (for future reference)

---

## ✅ Best Practices Applied

- Immutable state updates (never mutate directly)
- Unique IDs with `uuid`
- Clean, readable function names
- Proper form handling
- Responsive + accessible UI
- Clear separation of concerns

---

## 🚀 How to Use This Guide

1. Read this MD file first for big picture
2. Open `TodoList.jsx` and follow the comments
3. Check CSS for visual explanations
4. Experiment by adding features (filter, count, localStorage, etc.)

---

**You now have a solid, production-ready foundation for a Todo List in React!**

Keep building on this — this pattern is used in many real-world applications. 💪

---

**Created for Future Kaushal** - Review this whenever you need to remember how this component works.
