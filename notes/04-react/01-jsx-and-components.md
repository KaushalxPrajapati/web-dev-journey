# React JSX & Components

React is a declarative, efficient component-based JavaScript library for building user interfaces.

---

## 1. Component Structure

Functional components are JS functions that return JSX markup.

```jsx
// Greeting.jsx
export default function Greeting() {
    const user = "Kaushal";

    return (
        <div className="greeting-card">
            <h2>Welcome back, {user}!</h2>
            <p>Ready to build modern web applications?</p>
        </div>
    );
}
```

---

## 2. JSX Rules & Syntax

1. **Single Root Element**: Return elements wrapped in a single parent tag or Fragment (`<>...</>`).
2. **Close All Tags**: Self-closing tags must end with `/>` (e.g. `<img />`, `<br />`).
3. **CamelCase Attributes**: Use `className` instead of `class`, `onClick` instead of `onclick`.
4. **JS Expressions**: Wrap variables or JS expressions inside curly braces `{expression}`.

```jsx
export default function UserCard() {
    const isLoggedIn = true;

    return (
        <>
            {isLoggedIn ? (
                <div className="user-profile">
                    <h3>User Profile</h3>
                </div>
            ) : (
                <p>Please log in.</p>
            )}
        </>
    );
}
```
