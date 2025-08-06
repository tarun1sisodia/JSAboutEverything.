let p = document.querySelector("p");

function dblclick() {
    p.style.color = "green";

}
//To add Event Listener.
p.addEventListener("dblclick", dblclick);

//To Remove Event Listener.
p.removeEventListener("dblclick", dblclick);

// p.addEventListener("click", function () {
//     p.style.color = "green";
// });


function keydown() {
    p.textContent = "Please Enter Your Name";
}

//run this Function when you know 
document.addEventListener("keydown", keydown);

// input lene ka tarika
let inputt = document.querySelector("input");

function input(evt) {
    // console.log('Typed');
    if (evt.data !== null) {
        console.log(evt.data); //data is predefined
    }
}

inputt.addEventListener("input", input);

let sel = document.querySelector("select");

function change(details) {
    console.log(details.target.value);
    if (details.target.value === "mi") {
        keydown(p.textContent = `Device Selected: ${details.target.value}`);

    }

}
sel.addEventListener("change", change);








