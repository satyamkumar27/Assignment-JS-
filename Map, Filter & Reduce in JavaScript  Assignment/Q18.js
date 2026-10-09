
let orderAmount = [
    { amount: 500 },
    { amount: 1000 },
    { amount: 750 }
];

let totalAmount = orderAmount.reduce((accumulator , order) => {
    return accumulator += order.amount
} , 0)

console.log(totalAmount);