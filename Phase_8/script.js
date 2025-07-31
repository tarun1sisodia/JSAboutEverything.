let ul = document.querySelector("ul");
let li = document.createElement("li");
li.textContent = "Live at slack";

let add = ul.appendChild(li);

console.log(add);

let img = document.createElement('img');

img.setAttribute("src", "https://images.unsplash.com/photo-1744359678374-4769eacf44d6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzfHx8ZW58MHx8fHx8");
// okay ye jo img h ye abhi string ki trh kam kr rhi h .
// document.querySelector("div").prepend('img');
img.classList.add("placeholder")

document.querySelector("div").prepend(img);


