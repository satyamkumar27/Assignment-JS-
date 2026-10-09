
let cartItems = [
    { name: "Mouse", price: 500, quantity: 2 },
    { name: "Keyboard", price: 1000, quantity: 1 }
];

let totalPrices = cartItems.reduce((accumulator , cart) => {
    return accumulator += cart.price * cart.quantity
} , 0)

console.log(totalPrices);