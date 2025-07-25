function discountCalculator(discount) {
    return function (price) {
        return price - (price * discount) / 100;
    }
}

let discounter = discountCalculator(10);
discounter(200);

console.log(discounter(210));
console.log(discounter(200));

let ds = discountCalculator(5);

console.log(ds(1200));

function counter() {
    let count = 0;

    return function () {
        count++;
        console.log(count);
    }
}

let a = counter();
a(); //1
a(); //2 
a(); //3
a(); //4 
//Because the counter function is returning an another function which is stored in a & it's keep going.

let b = counter();
b(); //1
b(); //2
b(); //3
//from here there are new counter function starting and b is using new counter() returning function that is stored in another somewhere.

