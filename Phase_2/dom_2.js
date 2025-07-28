let h1 = document.querySelector('h1');

h1.textContent = "Maintainance Mode guidance by textContent";

console.dir(h1);
// console.log(h1);

let h2 = document.querySelector('h2');
h2.innerHTML = 'You are in Privacy mode sponser by InnerHtml';
// console.log(h2);
console.dir(h2);

let h3 = document.querySelector('h3');
h3.innerText = 'Pov! Location Exposed by Inner Text';

console.dir(h3);
// console.log(h3);

let h4 = document.querySelector('h4');

// h4.innerHTML = "<i>Mode</i>";

console.log(h4);

h4.hidden = true;


