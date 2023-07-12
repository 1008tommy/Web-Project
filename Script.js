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

    // add a new cart item to the set of cart items
    cartItems.push(item);

    /*

    // add a new cart item to the set of cart items
    cartItems.push({
        name: "Item Name",
        quantity: 10,
    });

    */

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


        /*

        // create a variable to store the HTML for the cart items
        let cartItemsHtml = "";

        // loop through the cart items
        cartItems.forEach((cartItem) => {
            // add the HTML for the cart item to the cart items HTML variable
            cartItemsHtml += `
          <div>
            <h1>${cartItem.name}</h1>
            <p>${cartItem.quantity}</p>
          </div>
        `;
        });

        // add the cart items code to the division with the ID of "cart"
        document.getElementById("cart").innerHTML = cartItemsHtml;

        */
    }
    return [];
}
function clearCart() {
    localStorage.setItem("cartItems", "[]");
}