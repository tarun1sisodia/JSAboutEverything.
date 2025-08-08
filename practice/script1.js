
//Body bana rahe h hum yahan.
let bodySelect = document.querySelector("body");
//body m styles de raha hu ab.
bodySelect.style.backgroundColor = "black";
bodySelect.style.color = "yellow";
bodySelect.style.height = "100vh";
bodySelect.style.justifyContent = "center";
bodySelect.style.display = "flex";
bodySelect.style.alignItems = "center";

// ek div create kar rahe jo sab kuch store karega
let createDivSelect = document.createElement("div");
createDivSelect.style.textAlign = "center";

bodySelect.append(createDivSelect); // body me div add

//Creation of Elements
let h2Create = document.createElement("h2");
let inputCreate = document.createElement("input");
let selectCreate = document.createElement("select");

//setting the Attributes.
inputCreate.setAttribute("id", "inputData");
selectCreate.setAttribute("id", "device");

//Adding placeholder and text
inputCreate.placeholder = "name";
inputCreate.type = "text";
inputCreate.style.padding = "5px";
inputCreate.style.marginBottom = "10px";

h2Create.textContent = "Choose Your Device";

createDivSelect.append(h2Create);
createDivSelect.prepend(inputCreate);
createDivSelect.append(selectCreate);

// user se option count lena
let n = +prompt("How many options you want?");

// saare option store karne ke liye array
let allOptions = [];

let deviceOption = document.createElement("option");
deviceOption.textContent = "Choose Your Device";
deviceOption.selected = true;
deviceOption.disabled = true;
selectCreate.prepend(deviceOption);

for (let i = 0; i < n; i++) {
    let optionCreate = document.createElement("option");
    let valueOFoption = prompt(`Enter Value for option ${i + 1}:`);
    let dataOFoption = prompt(`Enter Text for value "${valueOFoption}":`);

    optionCreate.setAttribute("value", valueOFoption);
    optionCreate.textContent = dataOFoption;
    selectCreate.append(optionCreate);

    allOptions.push(optionCreate);
    console.log(`Option added: value="${valueOFoption}", text="${dataOFoption}"`);
}

console.dir(inputCreate);
console.dir(h2Create);
console.log(allOptions); // saare options dekh lo


let inputText = document.querySelector("input");

function change(dets) {
    console.log(dets.target.value);
    if (dets.key === "Enter") {
        let url = dets.target.value.trim();
        if (url) {
            let img = document.createElement("img");
            img.setAttribute("src", url);
            img.style.width = "150px";
            img.style.height = "auto";
            img.style.marginBottom = "15px";
            img.style.borderRadius = "8px";
            img.style.display = "block"; // center karne ke liye
            img.style.marginLeft = "auto";
            img.style.marginRight = "auto";

            // image ko input ke upar lagana
            createDivSelect.insertBefore(img, inputCreate);

            dets.target.value = "Tarun Sisodia"; //hardcored value to appear in Input field
        }
    }

}
inputText.addEventListener("keydown", change);

let selec = document.querySelector("#device");

let h1 = document.querySelector("h2");

function choose(dets) {
    console.log(dets.target.value);
    console.log(dets);
    h1.textContent = `${dets.target.value} Device Connected...`
    h1.style.textTransform = "capitalize";
}

selec.addEventListener("change", choose);
