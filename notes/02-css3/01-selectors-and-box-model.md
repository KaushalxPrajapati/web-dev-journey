# CSS3 Selectors & Box Model

CSS (Cascading Style Sheets) formats the presentation and layout of HTML elements.

---

## 1. Including CSS in HTML

```html
<!-- 1. Inline CSS -->
<h1 style="color: blue;">Inline Styled Heading</h1>

<!-- 2. Internal CSS (in <head>) -->
<style>
    p { color: gray; }
</style>

<!-- 3. External CSS (Recommended) -->
<link rel="stylesheet" href="style.css" />
```

---

## 2. CSS Selectors & Specificity

```css
/* Element Selector */
h1 {
    color: #333;
}

/* Class Selector (Reusable) */
.btn-primary {
    background-color: #007bff;
    color: white;
}

/* ID Selector (Unique element) */
#main-header {
    font-size: 24px;
}

/* Grouping Selector */
h1, h2, h3 {
    font-family: 'Inter', sans-serif;
}

/* Descendant Selector */
nav ul li {
    list-style: none;
}
```

---

## 3. The CSS Box Model

Every HTML element is rendered as a rectangular box comprising:
1. **Content**: The actual text or image.
2. **Padding**: Transparent space around content inside the border.
3. **Border**: Line surrounding padding and content.
4. **Margin**: Transparent space outside the border separating elements.

```css
.card {
    width: 300px;
    padding: 20px;
    border: 2px solid #ccc;
    margin: 15px;
    box-sizing: border-box; /* Includes padding & border inside total width */
}
```

> **Crucial Rule**: Always set `box-sizing: border-box;` in CSS resets so element sizing remains consistent.
