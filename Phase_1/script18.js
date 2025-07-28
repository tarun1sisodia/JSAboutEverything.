//stop at 1st multiple of 7.

for (let i = 1; i <= 100; i++) {
    if (i % 7 === 0) {
        break;
    }
    // console.log(i);

}

//skips of 3 multiples..

for (let i = 1; i <= 20; i++) {
    if (i % 3 === 0) {
        continue;
    }
    // console.log(i);

}

let count = 0;
for (let i = 1; i <= 100; i++) {

    // if (i % 2 === "1") { // It will never execute because here we have passed the "1" with strict equality type operator.
    if (i % 2 === 1) {
        count++;
        console.log(i);

    }
    if (count === 5) break;

}