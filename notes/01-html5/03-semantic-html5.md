# Semantic HTML5 Layout

Semantic HTML uses tags that clearly describe their meaning to both the browser and developer.

---

## 1. Why Use Semantic HTML?

- **SEO**: Search engines better understand page structure and hierarchy.
- **Accessibility**: Screen readers navigate content logically for users with disabilities.
- **Readability**: Keeps code organized and easy to maintain.

---

## 2. Core Semantic Elements

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8" />
    <title>Semantic HTML Page Structure</title>
</head>
<body>

    <!-- Header Section -->
    <header>
        <h1>My Web Dev Journey</h1>
        <nav>
            <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#projects">Projects</a></li>
            </ul>
        </nav>
    </header>

    <!-- Main Content Area -->
    <main>
        <!-- Primary Topic Section -->
        <section id="about">
            <h2>About Me</h2>
            <p>Welcome to my web development learning repository!</p>
        </section>

        <!-- Standalone Self-contained Article -->
        <article>
            <h2>Learning HTML5</h2>
            <p>Semantic tags help structure web pages accurately.</p>
        </article>

        <!-- Sidebar / Supplementary Content -->
        <aside>
            <h3>Quick Links</h3>
            <p>Check out my GitHub portfolio.</p>
        </aside>
    </main>

    <!-- Footer Section -->
    <footer>
        <p>&copy; 2026 Kaushal Prajapati. All rights reserved.</p>
    </footer>

</body>
</html>
```

### Element Breakdown:
- `<header>`: Top container for logo, heading, or navigation.
- `<nav>`: Wraps navigation links.
- `<main>`: Represents the primary dominant content of the document.
- `<section>`: Groups related content under a specific topic heading.
- `<article>`: Self-contained composition (e.g., blog post, news story).
- `<aside>`: Sidebar content tangentially related to the main content.
- `<footer>`: Bottom section containing copyright, author, or contact info.
