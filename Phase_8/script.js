
/*&let img = document.querySelector("img");

console.log(img.src);

let attribute = img.getAttribute('src');

console.log(attribute);


let imge2 = document.querySelector('img').getAttribute('src');
let imge3 = document.querySelector('img').setAttribute('src', 'href the doe');

console.log(imge2);
console.log(imge3);

// let serhy = document.querySelector("a").setAttribute('href', "https://www.sheryians.com/");

// console.log(serhy);

// document.querySelector("a");
// a.href = 'workig'

let divs = document.querySelector('div');
divs.setAttribute("title", "Div h yeu.");

console.log(divs);

let buton = document.querySelector('button');
buton.removeAttribute('disabled');

console.log(buton);

// we are creating Elements.
let h1 = document.createElement('h1');
h1.textContent = 'Tarun'

console.log(h1);
//apendChild will add in the last.
//prepend will add beore the first

// h1.removeChild('h1');
*/
let ul = document.querySelector("ul");
let li = document.createElement('li')
ul.textContent = "Tarunss";
ul.appendChild(li);

let divsa = document.querySelector('div');
let neimage = document.createElement('img');

neimage.setAttribute('src', 'yes sir account');

document.querySelector('div').prepend(divsa);
