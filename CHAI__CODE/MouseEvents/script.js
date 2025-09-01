/* // let coords = document.querySelector('body');

document.body.addEventListener('mouseover', function (e) {
    console.log(e);
}, false); */

const x = document.getElementById('x-axis');
const y = document.getElementById('y-axis');

function randomColor() {

    const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
    return colors[Math.floor(Math.random() * colors.length + 1)];
}

document.addEventListener('mousemove', function (e) {
    x.textContent = e.clientX;
    y.textContent = e.clientY;

    let trail = document.createElement('div');
    trail.classList.add('trail');
    trail.style.top = e.clientY + "px";
    trail.style.left = e.clientX + "px";
    trail.style.backgroundColor = randomColor();
    // trail.style.backgroundColor = 'yellow';
    document.body.appendChild(trail);

    setTimeout(() => {
        trail.style.opacity = 0;
        trail.style.transform = 'scale(2)';
    }, 50);

    setTimeout(() => {
        trail.remove();
    }, 1000);

});