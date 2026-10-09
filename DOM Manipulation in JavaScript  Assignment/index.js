
// Q1.

let h1 = document.getElementById("title");

h1.textContent = "Hello JavaScript";


// Q2.

let p = document.querySelector(".description")

p.textContent = "New Description"


// Q3.

let list = document.querySelectorAll(".item");

list.forEach((li) => {
    li.style.color = "red"
})


// Q4.

let paragraph = document.querySelector(".message")

paragraph.textContent = "Welcome to JavaScript"


// Q5.

let div = document.querySelector("#container");

div.innerHTML = `<h2>My website</h2>
<p>Welcome to my website</p>`;


// Q6.

let photo = document.querySelector("#photo")

photo.setAttribute("src" , "new.jpg");
photo.setAttribute("alt" , "New Image");


// Q7.

let btn = document.querySelector("#btn");

btn.classList.add("style2");
btn.classList.remove("style2");
btn.classList.toggle("style2");


// Q8.

let heading = document.querySelector("#heading");

heading.style.color = "red";
heading.style.fontSize = "80px";
heading.style.backgroundColor = "aqua";


// Q9.

let productBtn = document.querySelector("#productBtn");

console.log(productBtn.getAttribute("data-id"));


// Q10.

let newElement = document.createElement("p");

newElement.textContent = "This paragraph was created using JavaScript.";

let body = document.querySelector("body");

body.append(newElement);


// Q11.

const skills = document.querySelector("#skills");

// let li1 = document.createElement("li");

// li1.textContent = "HTML";

// let li2 = document.createElement("li");

// li2.textContent = "CSS";

// let li3 = document.createElement("li");

// li3.textContent = "JavaScript";


// // skills.appendChild(li1);
// // skills.appendChild(li2);
// // skills.appendChild(li3);

// skills.append(li1, li2, li3);

// advance 
let skillsArr = ["HTML", "CSS", "JavaScript" , "React"];
skillsArr.forEach((skill) => {
    const li = document.createElement("li");
    li.textContent = skill;
    li.style.color = "blue";
    skills.append(li)
});




// Q12.

const technology = document.querySelector("#technology");

const last = document.createElement("li")
last.textContent = "React";
technology.append(last)

const first = document.createElement("li")
first.textContent = "HTML";
technology.prepend(first)



// Q13.

const language = document.querySelector("#language");

const middle = document.createElement("li");
middle.textContent = "CSS";

// const number = language.children;

// number[1].before(middle);

language.insertBefore(middle, language.children[1]);



// Q14.

const skills2 = document.querySelector("#skills2");

skills2.children[1].remove()



// Q15.

const btn2 = document.querySelector("#btn2");

const clone = btn2.cloneNode(true);

body.append(clone);