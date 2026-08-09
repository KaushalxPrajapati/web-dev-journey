# React Hooks in Depth

React Hooks let functional components access state, lifecycle events, context, and performance optimization features.

---

## 1. `useEffect` (Side Effects & Lifecycle)

Handles side effects like API calls, subscriptions, and DOM updates.

```jsx
import { useState, useEffect } from 'react';

export default function LiveClock() {
    const [time, setTime] = useState(new Date().toLocaleTimeString());

    useEffect(() => {
        const timerId = setTimeout(() => {
            setTime(new Date().toLocaleTimeString());
        }, 1000);

        // Cleanup function (runs before component unmounts or re-renders)
        return () => clearTimeout(timerId);
    }, [time]); // Dependency array controls when effect runs

    return <p>Current Time: {time}</p>;
}
```

---

## 2. `useRef` (DOM Access & Persistent Mutable Ref)

Stores a mutable value that doesn't trigger re-renders, or accesses DOM nodes directly.

```jsx
import { useRef } from 'react';

export default function TextInputWithFocusButton() {
    const inputEl = useRef(null);

    const onButtonClick = () => {
        // Focus the input element directly
        inputEl.current.focus();
    };

    return (
        <>
            <input ref={inputEl} type="text" />
            <button onClick={onButtonClick}>Focus Input</button>
        </>
    );
}
```

---

## 3. `useContext` (Global Context Tree)

Shares state globally across components without prop-drilling.

```jsx
import { createContext, useContext } from 'react';

const UserContext = createContext('Guest');

function Child() {
    const user = useContext(UserContext);
    return <p>Hello, {user}!</p>;
}

export default function App() {
    return (
        <UserContext.Provider value="Kaushal">
            <Child />
        </UserContext.Provider>
    );
}
```

---

## 4. Performance Hooks (`useMemo` & `useCallback`)

- `useMemo`: Caches the result of an expensive calculation.
- `useCallback`: Caches a function definition between renders.

```jsx
import { useMemo, useCallback } from 'react';

// Memoized calculation
const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);

// Memoized callback handler
const handleClick = useCallback(() => {
    doSomething(a);
}, [a]);
```
