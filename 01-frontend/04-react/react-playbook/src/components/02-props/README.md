# Level 02: Props & Component Communication

Props (*short for "properties"*) are how React components communicate with each other. They allow parent components to pass data and functions down to child components.

---

## 1. What are Props?

- **Unidirectional Data Flow:** Data in React only flows in one direction: **from parent to child**.
- **Props are Read-Only (Immutable):** A child component must **never** modify its own props. If data needs to change over time, that data belongs in **State**, not Props.

---

## 2. Receiving Props: Object vs. Destructuring

### Method A: Traditional `props` Object (`Header.jsx`)
The child receives a single object argument named `props`:
```jsx
export default function Header(props) {
    return <h1>{props.studentName}</h1>;
}
```

### Method B: Parameter Destructuring (`Product.jsx`)
Unpack only the specific properties you need directly inside the function signature:
```jsx
// Cleaner, modern, and standard React style
function Product({ title, price }) {
    return (
        <div>
            <h3>{title}</h3>
            <p>₹{price}</p>
        </div>
    );
}
```

### Setting Default Props:
You can provide fallback default values directly using JavaScript default arguments:
```jsx
function Product({ title = 'Unnamed Item', price = 0 }) { ... }
```

---

## 3. Passing Data Down vs. Communicating Up (`UserProfile.jsx`)

Since props only flow downward, how can a child component update state that lives in the parent?

### The Solution: Callback Props ("Lifting State Up")
1. The **Parent** (`UserProfile`) defines the state and a function to update it.
2. The **Parent** passes that update function down to the **Child** (`Header`) as a prop:
   ```jsx
   <Header
       studentName={userName}
       onUpdateAdmin={() => setUserName('Admin')}
   />
   ```
3. The **Child** triggers the callback when an event happens (like a button click):
   ```jsx
   <button onClick={props.onUpdateAdmin}>Change to Admin</button>
   ```
4. This invokes the function in the parent, updating the state and causing both components to re-render with the new data.

---

## 4. Reusable List Rendering with Cards (`ProductTab.jsx`)

When you have a list of data objects (e.g. products, users, comments):
1. Store the data in an array of objects.
2. Use `.map()` to return a `<Product />` card for each item.
3. Pass individual object attributes down as props.
4. Always pass a unique `key` prop (`key={item.id}`).

```jsx
{products.map((item) => (
    <Product key={item.id} title={item.title} price={item.price} />
))}
```

---

## ⚠️ Common Beginner Traps:
- ❌ **Mutating props directly:** Doing `props.studentName = 'New Name'` violates React rules and causes bugs. Always update state in the parent instead.
- ❌ **Calling the callback immediately instead of passing a function reference:**
  ```jsx
  // ❌ WRONG: Runs immediately on render, not when clicked!
  <button onClick={props.onUpdateAdmin()}>Click</button>

  // ✅ CORRECT: Passes function reference
  <button onClick={props.onUpdateAdmin}>Click</button>
  ```
