
let main = document.querySelector("#main");

let h1 = document.querySelector("h1");

let SpaceCount = 0;
let BackspaceCount = 0;
function input(dets) {

    if (dets.key === " ") {
        h1.textContent = `SPC ${SpaceCount}`;
        SpaceCount++;
        console.log(dets.key);
        console.log(dets);
    }
    else if (dets.key === 'Backspace') {
        h1.textContent = ` Backspace ${BackspaceCount}`;
        BackspaceCount++;
    }
    else if (dets.key) {

        h1.textContent = dets.key;
    }
}

window.addEventListener("keydown", input);