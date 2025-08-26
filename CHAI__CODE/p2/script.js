
//Select the Parent Element and Find All the values of it.

let parent = document.querySelector(".parent");

/* console.log(parent);

//Now find the values of it

console.log(parent.children);

//Without Converting in Array

for (let i = 0; i < parent.children.length; i++) {
    console.log(`Element: ${i} => ${parent.children[i].innerHTML}`);
}

let HTMLtoArray = Array.from(parent.children);

console.log(HTMLtoArray);

HTMLtoArray.forEach((i) => {
    i.style.color = "black";
    i.style.backgroundColor = "bisque";
    // i.textContent = "Tarun";
});


//First Element and last element .......

console.log(parent.firstElementChild);

console.log(parent.lastElementChild);
*/

let dayOne = document.querySelector(".day");

// console.log(dayOne);

// console.log(dayOne.parentElement);

// console.log(parent.nextElementSibling);

console.log(dayOne.nextElementSibling);

console.log(parent.childNodes);
