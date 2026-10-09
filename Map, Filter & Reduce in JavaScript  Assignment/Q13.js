let student = [ 
{ name: "Rahul", isActive: true }, 
{ name: "Priya", isActive: false } 
];

let activeStudent = student.filter((studentDetails) => {
    return studentDetails.isActive === true
});

console.log(activeStudent);