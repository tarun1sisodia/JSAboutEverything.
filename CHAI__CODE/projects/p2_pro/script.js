let form = document.querySelector('form');

// console.log(form);

form.addEventListener("submit", calculation);

function calculation(dets) {
    dets.preventDefault();
    const height = parseInt(document.querySelector("#height").value);
    const weight = parseInt(document.querySelector("#weight").value);
    const results = document.querySelector("#results");
    if (height === '' || height < 0 || isNaN(height)) {
        results.innerHTML = "Please Enter Valid Height";
    }

}




