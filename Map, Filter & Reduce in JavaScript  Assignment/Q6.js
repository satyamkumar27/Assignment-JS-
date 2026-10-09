
let product = [ 
{ name: "Laptop", price: 50000 }, 
{ name: "Mouse", price: 500 } 
];

let updatedProduct = product.map((value) => {
    return {...value , inStock: true}
})

console.log(updatedProduct);