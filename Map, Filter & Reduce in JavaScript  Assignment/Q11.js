let studentDetails = [
    { name: "Rahul", role: "developer" },
    { name: "Priya", role: "student" }
];

// let updatedStudentDetails = studentDetails.filter((value) => {
//     return value.role === "developer"
// });

// console.log(updatedStudentDetails);
 
console.log(studentDetails.filter((value) => {
    return value.role === "developer"
}));
