
// let ul = document.querySelector("ul");
// let li = document.createElement("li");
// li.textContent = "Live at slack";

// let add = ul.appendChild(li);

// console.log(add);

//Another Task
let img = document.createElement('img');

img.setAttribute("src", "https://images.unsplash.com/photo-1744359678374-4769eacf44d6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzfHx8ZW58MHx8fHx8");
// okay ye jo img h ye abhi string ki trh kam kr rhi h .
// document.querySelector("div").prepend('img');
img.classList.add("placeholder")

document.querySelector("div").prepend(img);

// Deleting the item form the list using removechild.

// we have already ul which is selecting the ul list. now we just have to remove

let ul2 = document.querySelector("ul");
let li2 = document.querySelector("li");

ul2.removeChild(li2);
//ClassList.toggle() -> agr h to remove kr dega aur agr nhi h to add kr dega.

//Class list .add() it adds only nothing more than it.
let moreli = document.querySelectorAll("ul li:nth-child(2n)"); //har bar dusara select krne ke liye.

moreli.forEach((element) => {
    //highlight class add ho rhi h bar bar.. har element pr.
    element.classList.add("highlight");
});
// i did myself ...HEEEEEE
let para = document.querySelectorAll("p");
para.forEach((n) => {
    n.style.color = "blue";
    n.style.fontSize = "20px";
});


//Change a Color of element or tag using addEvenListener but first select the p
let h = document.querySelector("p");


h.addEventListener("click", () => {
    h.style.color = "green";
});

