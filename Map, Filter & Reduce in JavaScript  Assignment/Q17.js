
let cartItems = [
    { name: "Laptop", quantity: 1 },
    { name: "Mouse", quantity: 2 }
];

let totalQuantity = cartItems.reduce((accumulator , cart) => {
    return accumulator += cart.quantity
} , 0)

console.log(totalQuantity);