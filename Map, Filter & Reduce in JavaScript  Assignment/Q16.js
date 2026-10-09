
let products = ["Laptop", "Mouse", "Keyboard"];

let totalProducts = products.reduce((accumulator) => {
    return accumulator + 1;
} , 0);

console.log(totalProducts);