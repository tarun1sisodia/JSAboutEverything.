// 1️⃣ Closures & Lexical Scoping – Text Generator

function textGenerator() {
    let counter = 0;
    return () => {
        counter++;
        console.log(counter);
        let div = document.querySelector(".addContent");
        let newPara = document.createElement("p");
        newPara.textContent = " This is Paragraph #X ";
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






