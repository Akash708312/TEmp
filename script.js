// Add to Cart functionality
const addToCartButtons = document.querySelectorAll('.add-to-cart');
addToCartButtons.forEach(button => {
    button.addEventListener('click', addToCart);
});

function addToCart() {
    // You can implement the cart logic here, such as adding the product to a shopping cart.
    // This typically involves creating an array of items and updating the cart total.
    alert('Product added to cart!'); // Replace this with your actual cart logic.
}
