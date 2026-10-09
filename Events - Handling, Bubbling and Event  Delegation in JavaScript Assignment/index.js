
// Q1.

const btn = document.querySelector("#btn");
const removeBtn = document.querySelector("#removeBtn");
const btnText = document.querySelector("#btnText");

btn.addEventListener("click" , () => {
    btnText.textContent = "Button Clicked!";
})

removeBtn.addEventListener("click" , () => {
    btnText.textContent = "";
});



// Q2.

const btn2 = document.querySelector("#btn2");
const removeBtn2 = document.querySelector("#removeBtn2");
const btnText2 = document.querySelector("#btnText2");

btn2.addEventListener("click" , () => {
    btnText2.textContent = "Welcome to my website!";
})

removeBtn2.addEventListener("click" , () => {
    btnText2.textContent = "Thanks for visiting!";
});



// Q3.

const intro = document.querySelector("#intro");

intro.addEventListener("mouseover" , () => {
    intro.style.backgroundColor = "aqua"
});

intro.addEventListener("mouseleave" , () => {
    intro.style.backgroundColor = "white"
});

// Q4.

const btn3 = document.querySelector("#btn3");

btn3.addEventListener('click' , (e) => {
    console.log(e.target.tagName);
})


// Q5.

const box = document.querySelector("#box");
const coordinates = document.querySelector("#coordinates");

box.addEventListener("mousemove" , (e) => {
    coordinates.textContent = `X: ${e.clientX}  Y: ${e.clientY}`
})



// Q6.

const userName = document.querySelector("#userName");

userName.addEventListener("change" , (e) => {
    console.log(userName.value);
})

// userName.addEventListener("focus", (e) => {
//     const value = e.target.value;
//     console.log(value);
// })
// userName.addEventListener("blur", (e) => {
//     const value = e.target.value;
//     console.log(value);
// })

// userName.addEventListener("input", (e) => {
//     const value = e.target.value;
//     console.log(value);
// })



// Q7.

const btn4 = document.querySelector("#btn4");
const btn4Text = document.querySelector("#btn4Text");
const btn5 = document.querySelector("#btn5");


let countBtn4 = 0;

// const removeBtn4 = () => {
//     if (countBtn4 < 3) {
//         btn4Text.textContent = "Button clicked!"
//         countBtn4++;
//     } else{
//         btn4.removeEventListener("click", removeBtn4)
//         btn4Text.textContent = "Clicking the button should no longer display the message."
//     }
// }

let btn4Function = () => {
     btn4Text.textContent = "Button Clicked Successful!"
}

btn4.addEventListener("click" ,btn4Function)

btn5.addEventListener("click", () => {
    btn4Text.textContent = ""
    btn4.removeEventListener("click" , btn4Function)
})




// Q8.

const btn6 = document.querySelector("#btn6");
const btn6Text = document.querySelector("#btn6Text");

let btn6Function = (e) => {
    btn6Text.textContent = "Welcome!"
    console.log(e.target.tagName);
}

btn6.addEventListener("click" , btn6Function , {once: true});



// Q9.

const divBtn7 = document.querySelector("#divBtn7");
const btn7 = document.querySelector("#btn7");

divBtn7.addEventListener("click" , (e) => {
    e.stopPropagation();
    console.log("Parent Clicked");
})

btn7.addEventListener("click" , (e) => {
    e.stopPropagation();
    console.log("Button Clicked");
})




// Q10.

const divBtn8 = document.querySelector("#divBtn8");
const btn8 = document.querySelector("#btn8");

divBtn8.addEventListener("click" , (e) => {
    console.log("Parent Clicked");
})

btn8.addEventListener("click" , (e) => {
    console.log("Button Clicked");
})




// Q11.

const divBtn9 = document.querySelector("#divBtn9");
const btn9 = document.querySelector("#btn9");

divBtn9.addEventListener("click" , (e) => {
    // e.stopPropagation();
    console.log("Parent Clicked");
} , {capture: true})

btn9.addEventListener("click" , (e) => {
    // e.stopPropagation();
    console.log("Button Clicked");
})




// Q12.

const buttons = document.querySelector("#buttons");

buttons.addEventListener("click" , (e) => {
    if (e.target.tagName === "BUTTON") {
        console.log(`${e.target.textContent} button clicked`);
    }
});




// Q13.

const skills = document.querySelector("#skills");

skills.addEventListener("click" , (e) => {
    if (e.target.tagName === "LI") {
        console.log(`You clicked: ${e.target.textContent}`);
    }
})