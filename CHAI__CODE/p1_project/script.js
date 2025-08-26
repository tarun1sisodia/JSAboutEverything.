// console.log("Hello");

let body = document.querySelector("body");
let buttons = document.querySelectorAll(".button");

buttons.forEach(function (button) {
    console.log(button);
    button.addEventListener("click", function (dets) {
        console.log(dets.target);
        switch (dets.target.id) {
            case 'grey':
                body.style.backgroundColor = dets.target.id;
                break;
            case 'white':
                body.style.backgroundColor = dets.target.id;
                break;
            case 'blue':
                body.style.backgroundColor = dets.target.id;
                break;
            case 'black':
                body.style.backgroundColor = dets.target.id;
                break;

            default:
                break;
        }
    });

});

console.log(buttons);

