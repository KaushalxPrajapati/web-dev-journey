# KP Living

KP Living is a static ecommerce-style furniture website built with HTML, CSS, and Vanilla JavaScript. It is designed as a frontend practice project focused on product listing, product filtering, cart functionality, checkout validation, and responsive user interface design.

The project simulates a furniture and home decor shopping experience for Indian homes.

## Live Demo

Live Project: https://kp-living.vercel.app

Personal Website: https://hellokaushal.dev

> KP Living is currently deployed on Vercel. My personal website `hellokaushal.dev` is used as my main portfolio and project index, where visitors can explore my hosted projects.

## Repository

GitHub Repository: https://github.com/KaushalxPrajapati/kp-living

## Project Overview

KP Living is a frontend-only furniture ecommerce website. Users can browse furniture products, search and filter items, view product details, add products to the cart, update item quantities, apply coupon codes, and complete a demo checkout form.

This project does not use any backend, database, real payment gateway, or real order processing. All cart-related data is handled in the browser using `localStorage`.

## Features

- Multi-page static ecommerce-style website
- Home page with hero section, featured categories, best sellers, and new arrivals
- Product listing page
- Product search functionality
- Product filtering by category, room, material, color, price, rating, discount, and availability
- Product sorting functionality
- Product details page
- Related products section
- Add to cart functionality
- Cart data saved using `localStorage`
- Quantity update and remove item functionality
- Cart subtotal, discount, delivery charge, GST, and total calculation
- Coupon code system
- Checkout form validation
- Contact form validation
- Newsletter form validation
- Responsive design for desktop, tablet, and mobile devices
- Favicon and custom logo support

## Tech Stack

- HTML5
- CSS3
- Vanilla JavaScript
- localStorage
- Git
- GitHub
- Vercel

## Pages

- `index.html` - Home page
- `products.html` - Product listing page
- `product-details.html` - Single product details page
- `cart.html` - Shopping cart page
- `checkout.html` - Demo checkout page
- `about.html` - About page
- `contact.html` - Contact page

## Folder Structure

```text
kp-living/
├── static/
│   ├── assets/
│   │   ├── favicon.png
│   │   └── logo.svg
│   ├── css/
│   │   ├── 01-base.css
│   │   ├── 02-header.css
│   │   ├── 03-layout.css
│   │   ├── 04-buttons.css
│   │   ├── 05-home.css
│   │   ├── 06-product-card.css
│   │   ├── 07-forms-feedback.css
│   │   ├── 08-footer.css
│   │   ├── 09-products-page.css
│   │   ├── 10-product-details.css
│   │   ├── 11-cart.css
│   │   ├── 12-checkout.css
│   │   ├── 13-about.css
│   │   ├── 14-contact.css
│   │   └── 15-responsive.css
│   └── js/
│       └── script.js
├── about.html
├── cart.html
├── checkout.html
├── contact.html
├── index.html
├── product-details.html
├── products.html
└── README.md
```

## How to Run Locally

1. Clone the repository:

```bash
git clone https://github.com/KaushalxPrajapati/kp-living.git
```

2. Open the project folder:

```bash
cd kp-living
```

3. Open `index.html` directly in your browser.

You can also use the VS Code Live Server extension for a better local development experience.

## Deployment

This project is deployed on Vercel and is available here:

```text
https://kp-living.vercel.app
```

## Important Notes

- This is a frontend-only project.
- No real payment is processed.
- No real order is placed.
- No backend or database is connected.
- Cart data is stored only in the browser using `localStorage`.
- Product images are loaded from online image sources.
- This project is created for learning, practice, and portfolio-building purposes.

## Current Limitations

- Product data is stored directly inside JavaScript.
- Cart data can be edited from the browser because it uses `localStorage`.
- The checkout form is only a demo and does not send real order data.
- There is no login, user account, admin panel, or database.
- Images depend on external image URLs, so some images may fail if the external source changes.

## Future Improvements

- Add backend support using Node.js and Express.js
- Store products and orders in a database
- Add user authentication
- Add real checkout flow
- Add admin panel for product management
- Improve product image fallback handling
- Add loading states and better error handling
- Improve accessibility
- Add wishlist functionality
- Add search result highlighting
- Add reusable header and footer rendering with JavaScript

## Author

Created by Kaushal Prajapati

GitHub: https://github.com/KaushalxPrajapati

Personal Website: https://hellokaushal.dev
