let productPrice = 150;
let quantity = 3;

let  originallBill = (productPrice * quantity);
let discount = (originallBill * 10) / 100;
let finalBill = originallBill - discount;

console.log(`Original bill =` , originallBill);
console.log(`Discount amount =` , discount);
console.log(`Final bill =` , finalBill);
