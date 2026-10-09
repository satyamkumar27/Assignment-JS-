let originalPrices = [100, 200, 300];

let newPrices = originalPrices.map((price) => {
    return price + (price * 10)/100;
})

console.log(originalPrices);
console.log(newPrices);