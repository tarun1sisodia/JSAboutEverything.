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
    p.style.fontSize = "20px";
    p.style.color = "cyan";
}

//run this Function when you know 
document.addEventListener("keydown", keydown);

// input lene ka tarika
let inputt = document.querySelector("input");

function input(evt) {
    // console.log('Typed');
    if (evt.data !== null) {
        console.log(evt.data); //data is predefined
        console.log(evt); //data is predefined
    }
}

inputt.addEventListener("input", input);

let sel = document.querySelector("select");

let device = document.querySelector("#device");

function change(details) {
    if (details.target.value) {

        console.log(details.target.value);

        device.textContent = `Device Selected: ${details.target.value}`;
             
    }

}
sel.addEventListener("change", change);








