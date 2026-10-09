
let array = [
    { name: "Laptop", inStock: true },
    { name: "Mouse", inStock: false }
];

let updatedArrray = array.filter((prdouct) => {
    return prdouct.inStock === true;
})

console.log(updatedArrray);