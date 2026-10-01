
function greaterNumber(num1 , num2) {
    if (num1 > num2) {
        return "num1 is a greater Number";
    } else if (num2 > num1) {
        return "num2 is a greater Number";
    }
    else {
        return "Both number is equal";
    }
}

console.log(greaterNumber(8 , 7));