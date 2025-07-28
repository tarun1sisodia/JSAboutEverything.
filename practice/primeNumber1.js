
function isPrime(n) {
    if (n < 2) return false;
    for (let i = 2; i < n; i++) {
        if (n % i === 0) return false;
    }
    return true;
}
// console.log(isPrime(7)); // true

//optimize this code using Square root of n..
/*
((n) => {
    if (n <= 1) return false; //kyunki 1 esa number h jo sabhi numbers ko divide kr skta h .. so islye hum pehle hi false return kr rhe h . jo kehta h ki hn m divide kr skta hu ..

    for (let i = 2; i < Math.floor(Math.sqrt(n)); i++) {
        if (n % i === 0) return true;
        else
            return false;
    }
    return true;
})(44);*/

//True => a prime.. number..
//False -> Yes its not a Prime NUmber.

//Print all prime number 1 to M

/*
((n) => {
    for (let i = 2; i <= n; i++) {
        console.log(i, isPrime(i));

    }
})(20); // why this worked..
*/
//Use more Advance Version of it.

((n) => {
    if (n <= 1 || n === 2) return false;
    if (n === 0 || n === 0) return true; // its not a prime number instead of it. it's a Even ..
    for (let i = 2; i <= Math.floor(Math.sqrt(n)); i++) {
        if (n % i === 0) return false; //false says its not a prime number.
    }
    return true;

})(31);

