// PC 12 JavaScript file
console.log("Implmenting the Limit To Type Just like Twitter and LInkedin");

let h1 = document.querySelector("h1");


// Your code here
let inp = document.querySelector("input");
let span = document.querySelector("span");
// let h2 = document.querySelector("h2");

inp.addEventListener("input", () => {
    // console.log(inp); // Whole data about the input.
    // console.log(inp.value);  // Value which is written inside of it.

    h1.textContent = "Limitter like Twitter and LInkedin";

    console.log(inp.value.length); // length of the input.
    //counting the limit .
    
    let leftCount = 20 - inp.value.length;

    span.textContent = leftCount;

    if (leftCount < 0) {
        span.style.color = "red";
    }
    else {
        span.style.color = "green";
    }
});