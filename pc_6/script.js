
let btn = document.querySelector("#btn");

let file = document.querySelector("#fileinp");

function uploadFile() {
    file.click();
}

btn.addEventListener("click", uploadFile);

function choose(dets) {
    console.log(dets);
    const filename = dets.target.files[0];
    if (filename)
        btn.textContent = `File Selected ${filename.name}`;
    // btn.textContent = `File Selected ${dets.target.value}`;

}
file.addEventListener("change", choose);         