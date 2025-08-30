let clock = document.getElementById("clock");
// let div = document.querySelector('.center');


setInterval(function () {
    let date = new Date();
    // console.log(date.toLocaleTimeString()); //for getting the time.
    clock.innerHTML = date.toLocaleTimeString();
}, 1000);

/* let n = 5;

for (let r = 0; r < n; r++) {
    let row = "";

    // Left side (1 → n-r)
    for (let i = 1; i <= n - r; i++) {
        row += i;
    }

    // Spaces (only if r > 0)
    if (r > 0) {
        for (let s = 1; s <= 2 * r - 1; s++) {
            row += " ";
        }
    }

    // Right side (n-r-1 → 1)  ✅ fixed
    for (let i = n - r - (r === 0 ? 1 : 0); i >= 1; i--) {
        row += i;
    }

    console.log(row);
} */
/* 
let n = 5;

for (let row = 1; row <= n; row++) {
    let line = "";
    let limit = n - row + 1;

    // Left side increasing
    for (let i = 1; i <= limit; i++) {
        line += i;
    }

    // Middle spaces
    if (row > 1) {
        let spaces = 2 * row - 3;
        for (let s = 1; s <= spaces; s++) {
            line += " ";
        }
    }

    // Right side decreasing
    for (let i = limit; i >= 1; i--) {
        line += i;
    }

    console.log(line); // print whole row
}
 */