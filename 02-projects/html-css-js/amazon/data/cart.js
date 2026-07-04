// Module-level state so other modules (like checkout.js) can import and share the cart.
// Load any saved items from localStorage so the cart survives page reloads.
// Step 1: read the raw text saved in localStorage under the key 'cart'.
// If nothing was ever saved before (first time visiting), this will be null.
const savedCartText = localStorage.getItem('cart');

// Step 2: convert that raw text back into a real JavaScript array.
// localStorage can only store plain text (strings). When the cart was saved earlier,
// it had to be converted into text using JSON.stringify(). JSON.parse() reverses that.
// If savedCartText was null, JSON.parse(null) also returns null.
const parsedCart = JSON.parse(savedCartText);

// Step 3: if nothing was saved (parsedCart is null), fall back to an empty array.
// Without this, the rest of the code below would crash for a first-time visitor
// who has never added anything to their cart yet.
const cartFromStorage = parsedCart || [];

// Step 4: build a clean new array from what was found.
// Pull out only productId and quantity from each item, even if the saved data
// happened to have extra leftover properties, so the cart always has the same shape.
const cleanedCartItems = cartFromStorage.map((item) => {
    return {
        productId: item.productId,
        quantity: item.quantity,
    };
});

// Step 5: export this as "cart" so other files (like checkout.js) can import and use it.
export const cart = cleanedCartItems;

const addedToCartTimers = {};

function saveCart() {
    localStorage.setItem('cart', JSON.stringify(cart));
}

export function addToCart(productId) {
    // Find the product in the cart with the matching id
    const matchingItem = cart.find((item) => item.productId === productId);

    if (matchingItem) {
        matchingItem.quantity++; // Increment the quantity of the existing item
    } else {
        cart.push({
            productId: productId,
            quantity: 1, // Default quantity for a new item
        });
    }

    saveCart();
}

export function updateCartQty() {
    let cartQuantity = 0;

    // go through every item currently in the cart and add up all the quantities
    cart.forEach((item) => {
        cartQuantity += item.quantity;
    });

    // try to find the element that displays the cart count in the header
    const cartQuantityEl = document.querySelector('.cart-quantity');

    // only try to update it if it actually exists on this page
    // checkout.html does not have this element, only amazon.html does,
    // so without this check, this line crashes every time this page loads
    if (cartQuantityEl) {
        cartQuantityEl.textContent = cartQuantity;
    }
}

export function cartLogic() {
    // Wire up the "Add to Cart" button on every product card
    const addToCartBtn = document.querySelectorAll('.add-to-cart-button');
    addToCartBtn.forEach((btn) => {
        btn.addEventListener('click', () => {
            const productId = btn.dataset.productId; // Pull the id off the button's data attribute
            addToCart(productId);
            updateCartQty();

            // Scope the "Added" message to THIS product's card (not just the first one)
            const addedToCartEl = btn.closest('.product-container').querySelector('.added-to-cart');

            // Clear any pending hide-timer for this product to prevent early removal on rapid clicks
            clearTimeout(addedToCartTimers[productId]);

            // Show the "Added" message
            addedToCartEl.classList.add('show');

            // Hide it after 2s
            addedToCartTimers[productId] = setTimeout(() => {
                addedToCartEl.classList.remove('show');
            }, 2000);
        });
    });

    // Show the correct count on initial page load (not just after a click)
    updateCartQty();
}
