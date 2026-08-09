# HTML5 Basics & Text Formatting

HTML (HyperText Markup Language) is the standard markup language used to build the structure of web pages.

---

## 1. Basic HTML Document Structure

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My First HTML Page</title>
</head>
<body>
    <h1>Hello, World!</h1>
</body>
</html>
```

### Key Elements Explained:
- `<!DOCTYPE html>`: Tells the browser this document is written in HTML5.
- `<html lang="en">`: The root element wrapping all content, specifying language as English.
- `<head>`: Contains metadata (page title, character set, responsive viewport settings) not shown directly on the page body.
- `<body>`: Contains all visible web page content (headings, paragraphs, images, etc.).

---

## 2. Headings & Paragraphs

HTML provides 6 levels of headings: `<h1>` (largest) to `<h6>` (smallest).

```html
<h1>Main Heading (Page Title)</h1>
<h2>Section Heading</h2>
<h3>Sub-heading</h3>
<h4>Minor Heading</h4>
<h5>Smaller Heading</h5>
<h6>Smallest Heading</h6>

<p>This is a standard text paragraph in HTML.</p>
<hr /> <!-- Horizontal line rule -->
<br /> <!-- Line break -->
```

---

## 3. Inline Text Formatting

- **Bold**: `<b>Bold Text</b>` or `<strong>Important Text</strong>`
- *Italic*: `<i>Italic Text</i>` or `<em>Emphasized Text</em>`
- <u>Underline</u>: `<u>Underlined Text</u>`
- <small>Small</small>: `<small>Small Text</small>`

```html
<p><b>Bold text</b>, <i>Italic text</i>, and <u>Underlined text</u>.</p>
```

---

## 4. Hyperlinks (Anchor Tags)

The `<a>` tag is used to create links.

```html
<!-- Relative link (points to internal local page) -->
<a href="about.html">Go to About Page</a>

<!-- Absolute link (points to external web address, same tab) -->
<a href="https://www.google.com">Visit Google</a>

<!-- Open in a new tab using target="_blank" -->
<a href="https://www.google.com" target="_blank">Visit Google (New Tab)</a>
```

---

## 5. Working with Images

Images are inserted using the self-closing `<img>` tag.

```html
<!-- Local Image -->
<img src="./images/logo.png" alt="Company Logo" width="200" height="100" />

<!-- External Image -->
<img src="https://example.com/photo.jpg" alt="Description of image" width="300" />
```

> **Tip**: Always include the `alt` attribute for accessibility and fallback text when images fail to load.

---

## 6. HTML Lists

### Unordered List (Bullet Points)
```html
<ul>
    <li>HTML5</li>
    <li>CSS3</li>
    <li>JavaScript</li>
</ul>
```

### Ordered List (Numbered)
```html
<ol>
    <li>Step One</li>
    <li>Step Two</li>
    <li>Step Three</li>
</ol>

<!-- Numbering style using type attribute -->
<ol type="A">
    <li>Option A</li>
    <li>Option B</li>
</ol>
```
