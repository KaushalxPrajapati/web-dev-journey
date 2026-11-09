# Level 05: Client-Side Routing with React Router

React Router allows single-page applications (SPAs) to have multiple page views with distinct URLs without triggering full browser page refreshes.

---

## 1. SPA vs. Multi-Page Applications

- **Traditional Websites (MPA):** Clicking a link requests a brand-new HTML page from the server. The screen flashes white, all JavaScript state is lost, and the entire DOM re-renders.
- **Single Page Applications (SPA):** The browser loads one `index.html` file once. When you click a link, React Router intercepts the URL change in JavaScript and swaps out which component is mounted on screen — **instantly, without refreshing the browser!**

---

## 2. Core Components of React Router

### A. `<BrowserRouter>`
Wraps your entire application (usually in `main.jsx`). It uses the HTML5 History API (`pushState`, `replaceState`) to keep your UI in sync with the browser URL.

### B. `<Routes>` and `<Route>`
`<Routes>` examines the current URL path and looks through its `<Route>` children to find the best match:
```jsx
<Routes>
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<About />} />
    <Route path="/contact" element={<Contact />} />
    {/* Wildcard 404 fallback */}
    <Route path="*" element={<NotFound />} />
</Routes>
```

### C. `<Link>` vs. `<a href>`
> **⚠️ Critical Rule:** **NEVER** use `<a href="...">` for internal navigation in React!

- `<a href="/about">`: Tells the browser to make a full network request and reload the page, wiping out all React state.
- `<Link to="/about">`: Changes the URL in the address bar using JavaScript and renders `<About />` instantly with zero page reload.

---

## 3. Advanced Routing Patterns

### Dynamic Route Parameters (`useParams`)
Match dynamic segments like product IDs or usernames:
```jsx
// Route definition:
<Route path="/users/:id" element={<UserProfile />} />

// Inside UserProfile component:
import { useParams } from 'react-router-dom';
const { id } = useParams();
```

### Programmatic Navigation (`useNavigate`)
Redirect users via code (e.g. after form submission or login):
```jsx
import { useNavigate } from 'react-router-dom';

const navigate = useNavigate();
const handleSubmit = () => {
    // Navigate programmatically:
    navigate('/dashboard');
};
```
