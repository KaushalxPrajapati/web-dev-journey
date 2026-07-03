let cart = []; // Initialize an empty array to store the items

const addToCartBtn = document.querySelectorAll('.add-to-cart-button');
addToCartBtn.forEach((btn) => {
    btn.addEventListener('click', () => {
        const productId = btn.dataset.productId; // Get the product name from the data attribute
        // Find the product object in the products array based on its name attribute

        let matchingItem = null;

        // Check if the product already exists in the cart
        cart.forEach((item) => {
            if (productId === item.productId) {
                matchingItem = item;
            } else {
                console.log('Item not found in cart');
            }
        });

        if (matchingItem) {
            matchingItem.quantity++; // Increment the quantity of the existing item in the cart
        } else {
            cart.push({
                productId: productId,
                quantity: 1, // Set the quantity to 1 by default
            });
        }

        console.log(cart);
    });
});
