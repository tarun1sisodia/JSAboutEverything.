for (let i = 0; i < 32; i++) {

    if (i === 30)
        continue;
    // console.log(i);

}

//print 1 to 10 use for 

for (let i = 0; i <= 10; i++) {
    // console.log(i);

}

//print 10 to 1 use while

let n = 10;
while (n >= 1) {
    // console.log(n);
    n--
}

//print even 1 to 20 use for.
for (let i = 1; i <= 20; i++) {
    if (i % 2 === 0) {
        // console.log(i);
    }

}

//print 1 to 15 use while.

let i = 0;

while (i <= 15) {
    if (i % 2 != 0) {
        // console.log(i); 

    }


    i++
}

//print table of any integer.

function table(n) {
    for (let i = 0; i <= 10; i++) {
        console.log(n * i);

    }
}
// table(5);

//sum of 0 to 100 ..

function sum1To100(n) {
    let sum = 0;
    for (let i = 0; i <= n; i++) {
        sum += i;

    }
    console.log(sum);
}
// sum1To100(20)

function divideBy3(n) {
    for (let i = 0; i <= n; i++) {
        if (i % 3 === 0) {
            console.log(i);
        }
        // else
        // console.log(i);

    }
}
// divideBy3(50)

/*
let asUser = parseInt(prompt('Enter Number:'));
let even = 0;
let odd = 0;
for (let i = 0; i <= asUser; i++) {
if (i % 2 == 0) {
    alert(`${i} is Even`);

}
if (i % 2 != 0) {

    alert(`${i} is Odd`);
}
}
*/

//count how many are divisible b/w  1 to 100 by 3 and 5..


for (let i = 0; i <= 100; i++) {
    if (i % 3 === 0) {
        console.log(`3 ${i}`);

    }
    if (i % 5 === 0) {
        console.log(`5 ${i}`);

    }
}

// Sum of range based even and odd numbers.
function evenOdd(n) {
    let even = 0;
    let odd = 0;
    for (let i = 0; i < n; i++) {
        if (i % 2 === 0) {
            even += i;
        }
        if (i % 2 != 0) {
            odd += i;
        }
    }
    console.log(even);
    console.log(odd);

}
evenOdd(20);