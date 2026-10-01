
let array = [
    {name : "Rahul" , age : 20},
    {name : "Priya" , age : 22}
];

let find = array.findIndex((value) => {
    return value.name === "Rahul";
});

console.log(find);