let num1 = 4;
let num2 = 2;
let operator = "%";

switch (operator) {
    case "+":
        console.log(`Output =`, num1 + num2);
        break;
    case "-":
        console.log(`Output =`, num1 - num2);
        break;
    case "*":
        console.log(`Output =`, num1 * num2);
        break;
    case "/":
        if (num2 != 0) {
            console.log(`Output =`, num1 / num2);
        } else {
            console.log("Cannot divide by zero");
        }
        break;
    case "%":
        if (num2 != 0) {
            console.log(`Output =`, num1 % num2);
        } else {
            console.log("Invalid Answer");
        }
        break;
    default:
        console.log("Invalid operator");
        break;
}