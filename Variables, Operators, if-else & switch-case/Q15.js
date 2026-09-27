let units = 200;

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

console.log("Bill" , bill);
