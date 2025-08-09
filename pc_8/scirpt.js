let mainDiv = document.querySelector("#main");

function mouseOver() {
    mainDiv.style.backgroundColor = "Green";
}
function mouseLeave() {
    mainDiv.style.backgroundColor = "blue";
}

mainDiv.addEventListener("mouseover", mouseOver);
mainDiv.addEventListener("mouseout", mouseLeave);