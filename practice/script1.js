let bodySelect = document.querySelector("body");

bodySelect.style.backgroundColor = "black";
bodySelect.style.color = "yellow";

// ek div create kar rahe jo sab kuch store karega
let createDivSelect = document.createElement("div");
bodySelect.append(createDivSelect); // body me div add

let h2Create = document.createElement("h2");
let inputCreate = document.createElement("input");
let selectCreate = document.createElement("select");

inputCreate.setAttribute("id", "inputData");
selectCreate.setAttribute("id", "device");


inputCreate.placeholder = "name";
inputCreate.type = "text";

h2Create.textContent = "Dynamic Code";

createDivSelect.append(h2Create);
createDivSelect.prepend(inputCreate);
createDivSelect.append(selectCreate);

// user se option count lena
let n = +prompt("How many options you want?");

// saare option store karne ke liye array
let allOptions = [];

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
