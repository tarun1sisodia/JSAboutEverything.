let count = 11;
let c = setInterval(() => {
    if (count > 0) {
        count--;
        console.log(count);
    }
    else
        clearInterval(c);
}, 1000);
let h2 = document.querySelector("h2")


let h2hide = setTimeout(() => {
    h2.style.display = "none";
}, 3000);


