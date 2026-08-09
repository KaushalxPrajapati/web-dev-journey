# CSS Positioning & Layouts

Control how elements are positioned relative to their normal flow, parent containers, or viewport.

---

## 1. Display Property

```css
/* Block: Takes full width, starts on new line (div, h1, p) */
.block-element {
    display: block;
}

/* Inline: Takes only necessary width, stays on same line (span, a, b) */
.inline-element {
    display: inline;
}

/* Inline-Block: Stays on same line BUT allows width & height styling */
.inline-block-element {
    display: inline-block;
    width: 150px;
    height: 50px;
}

/* Hidden from page layout */
.hidden-element {
    display: none;
}
```

---

## 2. Positioning Property (`position`)

```css
/* 1. Static (Default layout flow) */
.box-static {
    position: static;
}

/* 2. Relative (Offset relative to its normal position) */
.box-relative {
    position: relative;
    top: 10px;
    left: 20px;
}

/* 3. Absolute (Positioned relative to nearest positioned ancestor) */
.container {
    position: relative; /* Parent anchor */
}
.box-absolute {
    position: absolute;
    top: 0;
    right: 0;
}

/* 4. Fixed (Positioned relative to viewport browser window) */
.navbar-fixed {
    position: fixed;
    top: 0;
    width: 100%;
}

/* 5. Sticky (Toggles between relative and fixed based on scroll position) */
.header-sticky {
    position: sticky;
    top: 0;
}
```

---

## 3. Z-Index (Stacking Order)

`z-index` specifies the stack order of positioned elements (higher numbers appear on top).

```css
.overlay {
    position: absolute;
    z-index: 10;
}
```
