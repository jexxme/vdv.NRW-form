document.addEventListener('DOMContentLoaded', () => {
    loadCartItems();
});

function loadCartItems() {
    const cartItemsContainer = document.getElementById('cartItemsContainer');
    const cartItems = getCartItems(); // Function to retrieve cart items from storage

    if (cartItems && Object.keys(cartItems).length > 0) {
        Object.keys(cartItems).forEach(title => {
            const itemDiv = document.createElement('div');
            itemDiv.className = 'cart-item';
            itemDiv.innerText = `${title} - Quantity: ${cartItems[title]}`;
            cartItemsContainer.appendChild(itemDiv);
        });
    } else {
        cartItemsContainer.innerText = 'Your cart is empty.';
    }
}

function getCartItems() {
    // Retrieve cart items from local storage
    const storedCartItems = localStorage.getItem('cartItems');
    return storedCartItems ? JSON.parse(storedCartItems) : {};
}


function updateCartCounter() {
    let totalCount = 0;
    let storedCartItems = localStorage.getItem('cartItems');
    let cartItems = storedCartItems ? JSON.parse(storedCartItems) : {};

    for (let key in cartItems) {
        totalCount += cartItems[key];
    }

    // Check if the cartCounter element exists on the page
    const cartCounter = document.getElementById('cartCounter');
    if (cartCounter) {
        if (totalCount > 0) {
            cartCounter.innerText = totalCount;
            cartCounter.style.display = 'inline';
        } else {
            cartCounter.style.display = 'none';
        }
    }
}

