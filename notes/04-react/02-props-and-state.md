# React Props & Component State (`useState`)

Props pass read-only data down from parent to child components, while State manages dynamic data that changes over time inside a component.

---

## 1. Passing & Receiving Props

```jsx
// Child Component
function UserInfo({ name, role }) {
    return (
        <div className="card">
            <h3>{name}</h3>
            <p>Role: {role}</p>
        </div>
    );
}

// Parent Component
export default function App() {
    return (
        <div>
            <UserInfo name="Kaushal" role="Frontend Developer" />
        </div>
    );
}
```

---

## 2. Managing State with `useState`

`useState` allows components to track and trigger UI re-renders when data updates.

```jsx
import { useState } from 'react';

export default function Counter() {
    const [count, setCount] = useState(0);

    const increment = () => {
        // Use functional state updater when depending on previous state
        setCount(prevCount => prevCount + 1);
    };

    return (
        <div>
            <p>Current Count: {count}</p>
            <button onClick={increment}>Increment</button>
        </div>
    );
}
```

---

## 3. Object & Array State Updates

Always update objects and arrays immutably using the spread operator (`...`).

```jsx
const [user, setUser] = useState({ name: 'Kaushal', age: 22 });

// Updating object property immutably
setUser(prevUser => ({
    ...prevUser,
    age: 23
}));
```
