import { cart } from './cart.js';
import { products } from './products.js';

// Look up the full product info from its id (the cart only stores id + quantity)
function getProductById(productId) {
    return products.find((product) => product.id === productId);
}

function formatPrice(cents) {
    return `$${(cents / 100).toFixed(2)}`;
}

function calcItemTotal(item) {
    return getProductById(item.productId).priceCents * item.quantity;
}

// Update the "3 items" link in the header to match the real cart
export function renderCheckoutHeader() {
    const itemCount = cart.reduce((sum, item) => sum + item.quantity, 0);
    const headerLink = document.querySelector('.return-to-home-link');
    if (headerLink) headerLink.textContent = `${itemCount} items`;
}

// Build the order-summary list (one row per cart item)
export function renderCartItems() {
    const orderSummary = document.querySelector('.order-summary');
    if (!orderSummary) return; // Page doesn't have an order-summary block — bail out

    let cartItemsHTML = '';

    cart.forEach((item) => {
        const product = getProductById(item.productId);

        cartItemsHTML += `
            <div class="cart-item-container">
                <div class="delivery-date">Delivery date: Tuesday, June 21</div>

                <div class="cart-item-details-grid">
                    <img class="product-image" src="${product.image}" />

                    <div class="cart-item-details">
                        <div class="product-name">${product.name}</div>
                        <div class="product-price">${formatPrice(product.priceCents)}</div>
                        <div class="product-quantity">
                            <span>
                                Quantity:
                                <span class="quantity-label">${item.quantity}</span>
                            </span>
                            <span class="update-quantity-link link-primary">Update</span>
                            <span class="delete-quantity-link link-primary">Delete</span>
                        </div>
                    </div>

                    <div class="delivery-options">
                        <div class="delivery-options-title">Choose a delivery option:</div>
                        <div class="delivery-option">
                            <input type="radio" checked class="delivery-option-input" name="delivery-option-${item.productId}" />
                            <div>
                                <div class="delivery-option-date">Tuesday, June 21</div>
                                <div class="delivery-option-price">FREE Shipping</div>
                            </div>
                        </div>
                        <div class="delivery-option">
                            <input type="radio" class="delivery-option-input" name="delivery-option-${item.productId}" />
                            <div>
                                <div class="delivery-option-date">Wednesday, June 15</div>
                                <div class="delivery-option-price">$4.99 - Shipping</div>
                            </div>
                        </div>
                        <div class="delivery-option">
                            <input type="radio" class="delivery-option-input" name="delivery-option-${item.productId}" />
                            <div>
                                <div class="delivery-option-date">Monday, June 13</div>
                                <div class="delivery-option-price">$9.99 - Shipping</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;
    });

    orderSummary.innerHTML = cartItemsHTML;
}

// Build the payment summary (items total, shipping, tax, grand total) from the real cart
export function renderPaymentSummary() {
    const itemCount = cart.reduce((sum, item) => sum + item.quantity, 0);
    const itemsCents = cart.reduce((sum, item) => sum + calcItemTotal(item), 0);
    const shippingCents = itemsCents > 0 ? 499 : 0; // Free if cart is empty
    const subtotalCents = itemsCents + shippingCents;
    const taxCents = Math.round(subtotalCents * 0.1);
    const totalCents = subtotalCents + taxCents;

    // Replace the hardcoded rows in checkout.html with computed values
    const paymentSummary = document.querySelector('.payment-summary');
    if (!paymentSummary) return;

    paymentSummary.innerHTML = `
        <div class="payment-summary-title">Order Summary</div>

        <div class="payment-summary-row">
            <div>Items (${itemCount}):</div>
            <div class="payment-summary-money">${formatPrice(itemsCents)}</div>
        </div>

        <div class="payment-summary-row">
            <div>Shipping &amp; handling:</div>
            <div class="payment-summary-money">${formatPrice(shippingCents)}</div>
        </div>

        <div class="payment-summary-row subtotal-row">
            <div>Total before tax:</div>
            <div class="payment-summary-money">${formatPrice(subtotalCents)}</div>
        </div>

        <div class="payment-summary-row">
            <div>Estimated tax (10%):</div>
            <div class="payment-summary-money">${formatPrice(taxCents)}</div>
        </div>

        <div class="payment-summary-row total-row">
            <div>Order total:</div>
            <div class="payment-summary-money">${formatPrice(totalCents)}</div>
        </div>

        <button class="place-order-button button-primary">Place your order</button>
    `;
}
