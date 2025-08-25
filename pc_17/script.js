let btn = document.querySelector("#toggleButton");
let body = document.querySelector("body");

let btnDarkText = "Dark";
let btnLightText = "Light";


function clicked() {
    if (window.matchMedia('(prefers-color-scheme:dark').matches) {
        body.classList.add("dark");
        body.classList.remove("light");
        btn.textContent = btnDarkText;
    }
    else {
        body.classList.add("light")
        body.classList.remove("dark");
        btn.textContent = btnLightText;
    }
    console.log(window.matchMedia('(prefers-color-scheme:dark'));
}
// clicked();

if (localStorage.getItem("theme")) {
    body.classList.add(localStorage.getItem("theme"));
}
else {
    clicked();
}

window.matchMedia('(prefers-color-scheme:dark').addEventListener("change", function () {
    if (!localStorage.getItem("theme")) {
        clicked();
    }
});


btn.addEventListener("click", function () {
    if (body.classList.contains("dark")) {
        body.classList.remove("dark");
        body.classList.add("light");
        btn.textContent = btnLightText;
        localStorage.setItem("theme", "light");
    }
    else {
        btn.textContent = btnDarkText;
        body.classList.remove("light");
        body.classList.add("dark");
        localStorage.setItem("theme", "dark");
    }
});
/* 
btn.removeEventListener('click', clicked);
 */
