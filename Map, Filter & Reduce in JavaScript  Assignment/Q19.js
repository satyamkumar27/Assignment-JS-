
let array = ["HTML", "CSS", "JavaScript"];

let updatedArray = array.reduce((accumulator , value) => {
    return accumulator + "," + value
})

console.log(updatedArray);