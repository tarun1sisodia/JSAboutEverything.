//Find count of numbers - 12345 -> 5 numbers are..

//Thisi is called the function expression. not the function declaration.


//this is the function declaration.
function name(params) {

}


const counter = function (n) {
    let count = 0;
    while (n > 0) {
        n = Math.floor(n / 10);
        count++;
        if (n === 0) {
            break;
        }

    }
    return count;
}

counter(1234)
// console.log(counter(12345))