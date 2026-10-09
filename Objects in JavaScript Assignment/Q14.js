

// function displayUser(details) {
//     console.log(details.name);
//     console.log(details.email);

//     const {name , email} = details
//     console.log(name);
//     console.log(email);
// }

function displayUser({name, email}) {
    console.log(name);
    console.log(email);
}

displayUser({
    name: "Rahul",
    email: "rahul@example.com"
});