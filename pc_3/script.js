// 1️⃣ Closures & Lexical Scoping – Text Generator

function textGenerator() {
    let counter = 0;
    return () => {
        counter++;
        console.log(counter);
        let div = document.querySelector(".addContent");
        let newPara = document.createElement("p");
        newPara.textContent = ` This is Paragraph ${counter}`;
        div.appendChild(newPara);
    }
}

const count = textGenerator();
count();
count();

//  2️⃣ Primitive Type Handling – Profile Info

let name = "Tarun Sisodia";
let age = 21;
let isStudent = true;

let ul = document.querySelector("ul");

let li = document.createElement("li");
li.textContent = `Name: ${name} (${typeof name})`;
ul.appendChild(li);

let li2 = document.createElement("li");
li2.textContent = `Age: ${age} (${typeof age})`;
ul.appendChild(li2);

let li3 = document.createElement("li");
li3.textContent = `Student: ${isStudent} (${typeof isStudent})`;
ul.appendChild(li3);

// 3️⃣ Comparison Operators – Access Control

// let userLevel = +prompt('Acces Control');

if (userLevel === 1) {
    let mypara = document.querySelector(".addContent");
    let access = document.createElement("p");
    access.textContent = "Basic Access Granted";
    //perpend top pr add kr deta h ..
    mypara.prepend(access);
}
else if (userLevel === 2) {
    let mypara = document.querySelector(".addContent");
    let access = document.createElement("p");

    access.textContent = "Premium Access Granted";
    mypara.appendChild(access);
}
else {
    let mypara = document.querySelector(".addContent");
    let access = document.createElement("p");
    access.textContent = "No Access";
    mypara.appendChild(access);

    let Img = document.createElement("img");
    // document.appendChild(Img);
    // let ImgSelect = document.querySelector("img");
    Img.setAttribute("src", "https://tarun1sisodia.netlify.app/assets/images/Photo.jpg");

    Img.style.width = "50%";
    Img.style.height = "50%";

    mypara.appendChild(Img);
}

//4️⃣ Nullish Coalescing & Default Values

let username = null;
let displayName = username ?? " Guest User";

let h2Insert = document.createElement("h2");

username = prompt("Username:");

h2Insert.textContent = `Display Name: ${displayName}`;








