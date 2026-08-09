# CSS Flexbox & Grid Layouts

Modern layout modules for building 1D (Flexbox) and 2D (Grid) responsive user interfaces.

---

## 1. Flexbox (One-Dimensional Layouts)

Flexbox arranges elements in rows OR columns.

```css
.flex-container {
    display: flex;
    flex-direction: row; /* row | column */
    justify-content: center; /* Main axis: flex-start | flex-end | center | space-between | space-around */
    align-items: center; /* Cross axis: flex-start | flex-end | center | stretch */
    flex-wrap: wrap; /* nowrap | wrap */
    gap: 15px; /* Spacing between flex items */
}

.flex-item {
    flex: 1; /* Grows to fill available space evenly */
}
```

---

## 2. CSS Grid (Two-Dimensional Layouts)

Grid manages rows AND columns simultaneously.

```css
.grid-container {
    display: grid;
    grid-template-columns: repeat(3, 1fr); /* 3 equal columns */
    grid-gap: 20px;
}

/* Responsive Grid without media queries */
.auto-responsive-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 20px;
}
```

---

## 3. Responsive Media Queries

Adapt design layout based on screen width.

```css
/* Base Mobile Styles (Mobile-First) */
body {
    font-size: 14px;
}

/* Tablet Screens (min-width: 768px) */
@media (min-width: 768px) {
    body {
        font-size: 16px;
    }
}

/* Desktop Screens (min-width: 1024px) */
@media (min-width: 1024px) {
    .container {
        max-width: 1200px;
        margin: 0 auto;
    }
}
```
