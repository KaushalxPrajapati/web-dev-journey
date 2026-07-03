let cart = []; // Initialize an empty array to store the items

const addToCartBtn = document.querySelectorAll('.add-to-cart-button');
addToCartBtn.forEach((btn) => {
    btn.addEventListener('click', () => {
        const productId = btn.dataset.productId; // Get the product name from the data attribute

        let matchingItem = null;

        // Check if the product already exists in the cart
        cart.forEach((item) => {
            if (productId === item.productId) {
                matchingItem = item;
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

        let cartQuantity = 0;
        cart.forEach((item) => {
            cartQuantity += item.quantity; // Calculate the total quantity of items});
        });

        // Update the UI to reflect the changes in the cart
        document.querySelector('.cart-quantity').textContent = cartQuantity;

        console.log('Quantity:', cartQuantity);
        console.log('Cart:', cart); // Log the updated cart
    });
});
