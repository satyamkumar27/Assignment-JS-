let array = [ 
{ name: "Mouse", price: 500 }, 
{ name: "Keyboard", price: 1500 } 
];

let updatedArrray = array.filter((value) => {
    return value.price > 1000
});

console.log(updatedArrray);