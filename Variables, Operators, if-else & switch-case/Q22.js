let num1 = 4;
let num2 = 2;
let operator = "Modulus";

switch (operator) {
    case "Addition":
        console.log(`Output =`, num1 + num2);
        break;
    case "Subtraction":
        console.log(`Output =`, num1 - num2);
        break;
    case "Multiplication":
        console.log(`Output =`, num1 * num2);
        break;
    case "Division":
        if (num2 != 0) {
            console.log(`Output =`, num1 / num2);
        } else {
            console.log("Invalid Answer");
        }
        break;
    case "Modulus":
        if (num2 != 0) {
            console.log(`Output =`, num1 % num2);
        } else {
            console.log("Invalid Answer");
        }
        break;
    default:
        console.log("Invalid");
        break;
}