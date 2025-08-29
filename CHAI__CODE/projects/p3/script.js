let clock = document.getElementById("clock");
// let div = document.querySelector('.center');


setInterval(function () {
    let date = new Date();
    // console.log(date.toLocaleTimeString()); //for getting the time.
    clock.innerHTML = date.toLocaleTimeString();
}, 1000);

