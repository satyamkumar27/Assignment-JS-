let units = 2000;

let bill;

if (units < 0) {
    console.log("Invalid Units");
} else if (units <= 100) {
    bill = units * 5;
} else if (units <= 200) {
    bill = 100 * 5 + (units - 100) * 7;
} else {
    bill = (100 * 5) + (100 * 7) + ((units - 200) * 10);
}


let discount;

if (bill >= 2000) {
    discount = (bill * 10) / 100
} else {
    discount = 0;
}

let finalBill = bill - discount;

console.log("Units" , units);
console.log("Original Bill" , bill);
console.log("Discount" , discount);
console.log("Final Bill" , finalBill);