let students = [
    { name: "Rahul", email: "rahul@example.com" },
    { name: "Priya", email: "priya@example.com" }
];

let onlyName = students.map((student) => {
    return student.name;
})

console.log(onlyName);