let sub1 = 50;
let sub2 = 90;
let sub3 = 59;

let total = sub1 + sub2 + sub3;

if (sub1 < 40 || sub2 < 40 || sub3 < 40) {
    console.log("Result : FAIL");
} else {
    let avg = total / 3;
    
    if (avg >= 75) {
        console.log("Distinction");
    } else if (avg >= 60) {
        console.log("First Division");
    } else if (avg >= 50) {
        console.log("Second Division");
    } else {
        console.log("Pass");
    }
}