let prices = [500, 1200, 300];

let totalPrices = prices.reduce((accumulator , price) => {
    return accumulator += price;
} , 0);

console.log(totalPrices);