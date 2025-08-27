/* let btn = document.querySelector("Button");
let body = document.querySelector("body");

let btnDarkText = "Dark";
let btnLightText = "Light";


function clicked() {
    if (window.matchMedia('(prefers-color-scheme:dark)').matches) {
        body.classList.add("dark");
        body.classList.remove("light");
        btn.textContent = btnDarkText;
    }
    else {
        body.classList.add("light")
        body.classList.remove("dark");
        btn.textContent = btnLightText;
    }
    console.log(window.matchMedia('(prefers-color-scheme:dark)'));
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
 */


// Optimized Code
const btn = document.querySelector("#toggleButton");
const body = document.body;

const THEMES = { dark: "dark", light: "light" };
const BTN_TEXT = { dark: "Dark", light: "Light" };

// Apply theme
function setTheme(theme, save = true) {
    body.classList.remove(THEMES.dark, THEMES.light);
    body.classList.add(theme);
    btn.textContent = BTN_TEXT[theme];
    if (save) localStorage.setItem("theme", theme);
}

// Get system preference
function getSystemTheme() {
    return window.matchMedia("(prefers-color-scheme: dark)").matches
        ? THEMES.dark
        : THEMES.light;
}

// Initialize theme
setTheme(localStorage.getItem("theme") || getSystemTheme(), false);

// Listen for OS changes (only if no override in localStorage)
window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", () => {
    if (!localStorage.getItem("theme")) setTheme(getSystemTheme(), false);
});

// Toggle on button click
btn.addEventListener("click", () => {
    const newTheme = body.classList.contains(THEMES.dark) ? THEMES.light : THEMES.dark;
    setTheme(newTheme);
});

