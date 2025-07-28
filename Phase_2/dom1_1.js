let h1 = document.querySelector('h1');

// h1.innerHTML = "Hello Tarun <br> <a href> Download Now your Offer letter</a>";

console.dir(h1);
// if we did not pass the href to the a tag then the tag will automatically use the current page url for href.

let a = document.querySelector("a");

// console.dir(a);

//Updating the Href Tag..
a.href = "https://www.g.dev/tarun1sisodia";

console.dir(a);

//now using The SetAttribute.

a.setAttribute("href", "https://www.github.com/tarun1sisodia");

console.dir(a);

let img = document.querySelector("img");

img.setAttribute("src", "https://www.linkedin.com/in/tarun1sisodia/");

// console.dir(img);

let img1 = document.querySelector("a");

console.log(img1.getAttribute('href'));

a.removeAttribute('href');

console.dir(a);
