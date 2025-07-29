//Created the H1 directly by Manipulating the DOM.
let h1 = document.createElement("h1");

h1.textContent = "Hello how r u ";

console.log(h1);
// AppendChild comes after the script.
// document.body.appendChild(h1);

//Prepend Comes before the Script..
document.body.prepend(h1);

//Create Element.

let p = document.createElement("p");
p.innerText = "This is a non +Confirm";
document.querySelector("body").prepend(p);
// document.querySelector("body").appendChild(p);
console.log(p);



let food = document.createElement("h2");

food.textContent = "Ghar ja khaan kha le.";

document.querySelector('body').appendChild(food)


food.remove();

let h3 = document.createElement("h1");

h3.textContent = "Cool";

document.querySelector('body').prepend(h3);

// h3.remove();

h3.style.color = "blue";
console.dir(h3);
h3.style.padding = "20px";
console.dir(h3);

food.style.backgroundColor = "red";

food.style.fontFamily = 'gilroy';

let h4 = document.querySelector('h4');
document.querySelector('body').appendChild(h4);

console.dir(h4)


h4.classList.add('hululu')

h4.classList.remove();

//Toggle

h4.classList.toggle("huluu");

console.dir(h4);