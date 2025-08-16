// PC 11 JavaScript file
console.log("Hello from PC 11!");

// Your code here

// hum sidha hi parent pr event listener laga dete h taki vo sare children ko de sake..

let ul = document.querySelector("ul");
/*
ul.addEventListener("click", (i) => {
    console.log(i);
    console.log(i.target);
    i.target.style.textDecoration = "line-through";
});
ul.addEventListener("mouseout", (i) => {
    i.target.style.textDecoration = "none";
});
*/

ul.addEventListener("click", (dets) => {
    // dets.target.classList.add("lt"); 
    dets.target.classList.toggle("lt");
});

let btn = document.querySelector("button");
let a = document.querySelector(".a");
let b = document.querySelector(".b");
let c = document.querySelector(".c");

btn.addEventListener("click", (i) => {
    // console.log(i.target);
    console.log(`Button Clicked`);

});

c.addEventListener("click", (i) => {
    console.log(`C Clicked`);
    // console.log(i);
});
b.addEventListener("click", (i) => {
    console.log(`B Clicked`);
    // console.log(i);
}, true);
a.addEventListener("click", (i) => {
    console.log(`a Clicked`);
    // console.log(i);
});
