let form = document.querySelector('form');

// console.log(form);

form.addEventListener("submit", calculation);

function calculation(dets) {
    dets.preventDefault();
    const height = +(document.querySelector("#height").value);
    const weight = +(document.querySelector("#weight").value);
    const results = document.querySelector("#results");
    if (height === '' || height < 0 || isNaN(height)) {
        results.innerHTML = `❌ Please Enter Valid Height <span style="color:red;">${height}</span>`;
    }
    else if (weight === 0 || weight < 0 || isNaN(weight)) {
        results.innerHTML = `❌ Please Enter Valid Weight <span style="color:red;">${weight}</span>`;
    }
    else {
        const bmi = ((weight) / ((height * height) / 10000)).toFixed(2);
        results.innerHTML = `<span>${bmi}</span>`;

        if (bmi < 18.6) {
            results.innerHTML = `⚠️ Under Weight: ${bmi}`;
        }
        else if (bmi > 18.5 && bmi < 25) {
            results.innerHTML = `✅ Normal Weight: ${bmi}`;
        }
        else
            results.innerHTML = `Over Weight`;

    }

}




