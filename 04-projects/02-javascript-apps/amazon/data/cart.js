export let cart = [
    {
        productId: 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
        quantity: 2,
    },
    {
        productId: '15b6fc6f-327a-4ec4-896f-486349e85a3d',
        quantity: 1,
    },
];

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

export function removeFromCart(productId) {
    const newCart = [];
    cart.forEach((cartItem) => {
        if (cartItem.productId !== productId) {
            newCart.push(cartItem);
        }
    });

    cart = newCart;
}
