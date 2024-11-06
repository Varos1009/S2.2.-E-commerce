// If you have time, you can move this variable "products" to a json or js file and load the data in this js. It will look more professional
var products = [
    {
        id: 1,
        name: 'cooking oil',
        price: 10.5,
        type: 'grocery',
        offer: {
            number: 3,
            percent: 20
        }
    },
    {
        id: 2,
        name: 'Pasta',
        price: 6.25,
        type: 'grocery'
    },
    {
        id: 3,
        name: 'Instant cupcake mixture',
        price: 5,
        type: 'grocery',
        offer: {
            number: 10,
            percent: 30
        }
    },
    {
        id: 4,
        name: 'All-in-one',
        price: 260,
        type: 'beauty'
    },
    {
        id: 5,
        name: 'Zero Make-up Kit',
        price: 20.5,
        type: 'beauty'
    },
    {
        id: 6,
        name: 'Lip Tints',
        price: 12.75,
        type: 'beauty'
    },
    {
        id: 7,
        name: 'Lawn Dress',
        price: 15,
        type: 'clothes'
    },
    {
        id: 8,
        name: 'Lawn-Chiffon Combo',
        price: 19.99,
        type: 'clothes'
    },
    {
        id: 9,
        name: 'Toddler Frock',
        price: 9.99,
        type: 'clothes'
    }
]

// => Reminder, it's extremely important that you debug your code. 
// ** It will save you a lot of time and frustration!
// ** You'll understand the code better than with console.log(), and you'll also find errors faster. 
// ** Don't hesitate to seek help from your peers or your mentor if you still struggle with debugging.

// Improved version of cartList. Cart is an array of products (objects), but each one has a quantity field to define its quantity, so these products are not repeated.
var cart = [];

var total = 0;

// Exercise 1
function buy(id) {
    // 1. Loop for to the array products to get the item to add to cart
    // 2. Add found product to the cart array

    const product = products.find(item => item.id === id);
    if (!product) return;

    const cartItem = cart.find(item => item.id === id);
    if (cartItem) {
        cartItem.quantity += 1;
    } else {
        cart.push({ ...product, quantity: 1 });
    }
    const totalCount = cart.reduce((sum, item) => sum + item.quantity, 0);
    document.getElementById('count_product').textContent = totalCount;
}



// Exercise 2
function cleanCart() {
    cart = [];
    total = 0;
    printCart();
}

// Exercise 3
function calculateTotal() {
    // Calculate total price of the cart using the "cartList" array

    for (let i = 0; i < cart.length; i++) {
        total += cart[i].price * cart[i].quantity;
    }
    return total;

}

// Exercise 4
function applyPromotionsCart() {
    // Apply promotions to each item in the array "cart"

    for (let item of cart) {
        if (item.offer && item.quantity >= item.offer.number) {
            item.subtotalWithDiscount = item.price - (item.price * item.offer.percent / 100);
        }
        else {
            item.subtotalWithDiscount = item.price;
        }
    }
}

// Exercise 5
function printCart() {
    // Fill the shopping cart modal manipulating the shopping cart dom
    const cartList = document.getElementById('cart_list');
    const countProduct = document.getElementById('count_product');
    const totalPrice = document.getElementById('total_price');
    cartList.innerHTML = '';

    cart.forEach(item => {
        applyPromotionsCart();
        const subtotal = item.subtotalWithDiscount * item.quantity || item.price * item.quantity;
        const row = `
            <tr>
                <th scope="row">${item.name}</th>
                <td>$${item.price.toFixed(2)}</td>
                <td>${item.quantity}</td>
                <td><button onclick="removeFromCart(${item.id})" class="btn btn-secondary btn-sm">-</button></td>
                <td>$${subtotal.toFixed(2)}</td>
            </tr>
        `;
        cartList.innerHTML += row;
    });
    const totalCount = cart.reduce((sum, item) => sum + item.quantity, 0);
    countProduct.innerHTML = totalCount;
    totalPrice.innerHTML = cart.reduce((total, item) => total + item.subtotalWithDiscount * item.quantity, 0).toFixed(2);


}


// ** Nivell II **

// Exercise 7
function removeFromCart(id) {
    // Find the product in the cart by its ID
    const cartItemIndex = cart.findIndex(item => item.id === id);

    // If the item is found in the cart
    if (cartItemIndex !== -1) {
        const cartItem = cart[cartItemIndex];
        
        // Decrease the quantity by 1
        if (cartItem.quantity > 1) {
            cartItem.quantity -= 1;
        } else {
            // Remove item from the cart if quantity reaches 1
            cart.splice(cartItemIndex, 1);
        }

        // Reapply promotions
        applyPromotionsCart();

        // Recalculate the total
        calculateTotal();

        // Update the cart display
        printCart();
    }
}

function open_modal() {
    printCart();
}