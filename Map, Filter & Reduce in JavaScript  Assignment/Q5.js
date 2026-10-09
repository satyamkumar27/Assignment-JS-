
let array = [
    { name: "Rahul", role: "student" },
    { name: "Priya", role: "student" }
];

let updatedArray = array.map((value) => {
    return {...value , role: "developer"}
});

console.log(updatedArray);