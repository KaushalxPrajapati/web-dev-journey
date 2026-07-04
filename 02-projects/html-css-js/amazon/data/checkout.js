import { updateCartQty } from './cart.js';
import { renderCheckoutHeader, renderCartItems, renderPaymentSummary } from './render.js';

// Render every section of the checkout page from the actual cart state
renderCheckoutHeader();
renderCartItems();
renderPaymentSummary();

// Keep the header cart-quantity in sync if the user navigates back and adds more
updateCartQty();
