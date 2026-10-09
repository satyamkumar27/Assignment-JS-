let emails = ["rahul@gmail.com", "priya@yahoo.com", "aman@gmail.com"];

let gmailAddresses = emails.filter((email) => {
    return email.includes("@gmail.com");
})

console.log(gmailAddresses);