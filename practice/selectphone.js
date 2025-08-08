//change the color everytime when i click on it
let paragraph = document.querySelector("p");
let isRed = false;

function color() {
    if (!isRed) {

        paragraph.textContent = "You can Do Tarun..";
        paragraph.style.color = "red";
        paragraph.style.userSelect = "none";
    }
    else {
        paragraph.textContent = "Keep The Code Alive";
        paragraph.style.color = "green";
        paragraph.style.userSelect = "none";
    }
    isRed = !isRed;
}

paragraph.addEventListener("click", color);

// paragraph.removeEventListener("click", color);

//Created a basic feature to get input from user and print it in console.log
let demo = document.querySelector("input");

demo.addEventListener("input", input);


function input(dets) {
    console.log(dets.data); //as we see data ..
}

let h = document.querySelector("h1");

let selectDevice = document.querySelector("#device");

function select(dets) {

    h.style.textTransform = "capitalize";
    h.textContent = `Selected Device: ${dets.target.value}`;
    console.log(h);
    console.log(dets);
    console.log(dets.target.value);

}

selectDevice.addEventListener("change", select);



