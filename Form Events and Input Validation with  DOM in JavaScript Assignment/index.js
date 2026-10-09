
// Q1. and Q2.

const form = document.querySelector("#form");
const message = document.querySelector("#message")

form.addEventListener("submit", (e) => {
    e.preventDefault();
    message.textContent = "Form submitted successfully!";
})


//  Q3.

const userName = document.querySelector("#userName");
const inputMessage = document.querySelector("#inputMessage");

userName.addEventListener("input", (e) => {
    // console.log(userName.value);
    // console.log(e.target.value);
    inputMessage.textContent = `You entered: ${e.target.value}`
})



// Q4.

const select = document.querySelector("#select");
const selectValue = document.querySelector("#selectValue");

select.addEventListener("change", (e) => {
    selectValue.textContent = `Selected Language: ${e.target.value}`
})



// Q5. and Q6.

const address = document.querySelector("#address");

address.addEventListener("focus", (e) => {
    address.style.border = "2px solid blue";
    address.style.backgroundColor = "lightgray"
})

address.addEventListener("blur", (e) => {
    inputMessage.textContent = "You left the input field"
})




// Q7. , Q8. , Q9. and Q10.


const form2 = document.querySelector("#form2");
const names = document.querySelector("#name");
const email = document.querySelector("#email");
const password = document.querySelector("#password");


function error(input, errorMessage) {
    input.parentElement.querySelector(".showError").textContent = errorMessage
}

function clearError(input) {
    input.parentElement.querySelector(".showError").textContent = ""
}


function functionUserName(names) {
    if (names.value.trim().length === 0) {
        error(names, "Please Enter your name")
        return false;
    }

    if (names.value.trim().length < 3) {
        error(names, "username must be at least 3 character")
        return false;
    }

    clearError(names)

    return true;

}

function functionUserPassword(password) {
    if (password.value.trim().length === 0) {
        error(password, "Please Enter your password")
        return false;
    }

    if (password.value.trim().length < 8) {
        error(password, "password must be at least 8 character")
        return false;
    }

    clearError(password)

    return true;

}

function functionUserEmail(email) {

    const value = email.value.trim()
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Standard email format check

    if (value.length === 0) {
        error(email, "Please Enter your email")
        return false;
    }

    if (!emailRegex.test(value)) {
        error(email, "Please enter a valid email address")
        return false;
    }

    clearError(email)

    return true;

}

form2.addEventListener("submit", (e) => {

    e.preventDefault();

    const idValidUserName = functionUserName(names);
    const idValidUserPassword = functionUserPassword(password);
    const idValidUserEmail = functionUserEmail(email);

    if (idValidUserName && idValidUserPassword && idValidUserEmail) {
        document.querySelector("h1").textContent = "Account Created SuccessFully 🎉"
    } else {
        document.querySelector("h1").textContent = ""
    }

})
