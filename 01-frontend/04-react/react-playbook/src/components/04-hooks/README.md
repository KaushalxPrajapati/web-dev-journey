# Level 04: React Hooks Complete Guide

Hooks let you use state and other React features inside functional components without writing class components.

---

## The 2 Rules of Hooks
1. **Only Call Hooks at the Top Level:** Never call hooks inside loops, conditions (`if`), or nested functions.
2. **Only Call Hooks from React Functions:** Call them from React functional components or custom hooks, never standard JS functions.

---

## 1. `useState` (State Management)

State holds data that changes over time and triggers component re-renders.

### A. Primitive State & Functional Updates (`Counter1.jsx` vs `Counter2.jsx`)
```jsx
// Direct update:
setCount(count + 1);

// Functional update (safest for sequential updates):
setCount(prev => prev + 1);
```
> **⚠️ The Batching Trap:** If you call `setCount(count + 1)` three times in one event handler, React batches them using the same starting value of `count`, incrementing only once! Using `setCount(prev => prev + 1)` guarantees each step receives the latest updated value.

### B. Object State & Immutability (`LudoBoard.jsx`)
React compares object state by memory reference (`prev === next`). Mutating properties directly (`moves.blue += 1`) will **never** trigger a re-render. Always use the spread operator:
```jsx
setMoves(prev => ({
    ...prev,
    blue: prev.blue + 1
}));
```

---

## 2. `useEffect` (Side Effects & Lifecycle)

Used for code that talks to the outside world (timers, API calls, event listeners).

### Dependency Array Modes:
| Syntax | When it runs |
| :--- | :--- |
| `useEffect(() => { ... })` *(No array)* | Runs on **every** single render. |
| `useEffect(() => { ... }, [])` *(Empty array)* | Runs **once** when component mounts. |
| `useEffect(() => { ... }, [count])` | Runs on mount + whenever `count` changes. |

### Cleanup Functions (`Timer.jsx`, `LiveClock.jsx`):
If your effect starts an interval or adds an event listener, return a cleanup function to prevent memory leaks:
```jsx
useEffect(() => {
    const timer = setInterval(() => { ... }, 1000);
    return () => clearInterval(timer); // Cleanup when unmounted!
}, []);
```

---

## 3. `useContext` (Global State without Prop Drilling)

Avoid passing props down through 5 layers of intermediate components.
1. **Create:** `const UserContext = createContext();`
2. **Provide:** `<UserContext.Provider value="Kaushal"><Child /></UserContext.Provider>`
3. **Consume:** `const user = useContext(UserContext);`

---

## 4. Performance & Advanced Hooks

### `useRef` (`UseRefDemo.jsx`)
- **DOM Access:** `inputRef.current.focus()` to control HTML elements directly.
- **Mutable Storage:** Storing values (like render count) that survive re-renders **without** triggering a new render when changed.

### `useMemo` (`UseMemoDemo.jsx`)
Caches the **result of a calculation**. Only recalculates when dependencies change.
```jsx
const expensiveResult = useMemo(() => slowCalculation(number), [number]);
```

### `useCallback` (`UseCallbackDemo.jsx`)
Caches a **function definition** between renders. Used together with `React.memo` to prevent child components from needlessly re-rendering.
```jsx
const handleClick = useCallback(() => { ... }, []);
```
