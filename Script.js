function addToCart(item) {
    // gets cart items from the browser's local storage
    let cartItemsRaw = localStorage.getItem("cartItems");

    // creates a variable to an empty set of cart items
    let cartItems = [];

    // check if there are cart items in the browser's local storage
    if (cartItemsRaw) {
        // convert the cart items from a string to a set of cart items
        cartItems = JSON.parse(cartItemsRaw);
    }
     //check if browser's local storage is empty, if its not will convert to actual/usable data


    // add a new cart item to the set of cart items
    cartItems.push(item);

    // convert the set of cart items to a string
    cartItemsRaw = JSON.stringify(cartItems);

    // save the cart items to the browser's local storage
    localStorage.setItem("cartItems", cartItemsRaw);
}

function loadCart() {

    // gets cart items from the browser's local storage
    const cartItemsRaw = localStorage.getItem("cartItems");

    // check if there are cart items in the browser's local storage
    if (cartItemsRaw) {
        // convert the cart items from a string to a set of cart items
        const cartItems = JSON.parse(cartItemsRaw);

        // returns the set of cart items
        return cartItems;

    }
    return [];
}
function clearCart() {
    localStorage.setItem("cartItems", "[]");
}