//Function..

//basic function declaration.. 

//this is called the function declaration.
function demo() {
    console.log('Demo');
}

//Function expression ..
// jb hum variable m store kr lete h function ko that time we call this term...

const abc = function () {
    console.log("abcd");
}

//Fat Arrow Function..

const arrow = () => {
    console.log('Arrow h yu..');
}

// IIFE Immedeateliy Invoked Function Expression..
let count = 0;

((count) => {
    return count + 10;
})(count);


let num = 2;
((num) => num + 2)(num);

let addd = function (a, b) {
    console.log(a + b); //undefined + undefined = NaN.
}
// addd();


//Default Parameters ..
/*
let work = function (a = 1, b = 2) {
    console.log(a + b);

}
work();
*/
let work = function (a = 1, b = 2) {
    // a & b has default values if we pass arguments at time of calling then the default values wil be overwrite.
    console.log(a + b);

}
// work(10, 20);

// Rest Operator so we can use it in function space. because it is also called as Spread Operator.
const spread = function (...num) {
    // console.log(num.__proto__);
    // console.log(num)

}

spread(1, 2, 5, 2, 6, 2, 7, 2, 7, 23, 8, 7, 5, 34,)


// Rest Parameter.

// allows a function to take array as a arguments.

// mtlb argument jo rest parameter h vo ek array bana deta h data ke liye.

//sirf ek hi parameter allowed h Rest ka..

//aur haan vo akhiri hona chahiye.. it must be the last parameter.

// lastly no default data and trailing comma for it to use.

function name(a, b, ...sum) {

    // now here a = 1, b =2, and rest of all will be stored in sum as an array.

    console.log(`A: ${a}, B: ${b}, Sum: ${sum}`);

    // 81 - 86 are over code.. 

    const even = sum.filter((i) => i % 2 === 0);
    const odd = sum.filter((i) => i % 2 != 0);

    console.log(`Even: ${even}`);
    console.log(`Odd: ${odd}`);
}

name(1, 2, 3, 4, 5, 6);

/*
console.log(null === undefined); // false

console.log(null == undefined); //true

console.log(null <= 0); //true
console.log(null >= 0); //true

*/

//Arguments are like an array but they are not truely and array ..
//but rest gives a true array.

//Write a function maxNumber(...nums) that returns the largest number passed in

const maxNumber = function (...nums) {

    const max = Math.max(...nums);
    // this will return max element inside an array.. using Math.max();

    // const max = Math.max(nums); // this will return NaN. 

    console.log(`Max value in Array: ${max}`);

}
// maxNumber(1, 2, 4, 64, 72, 83, 26, 1, 63, 98, 44, 225, 95);

//why you can't any arugment after the rest parameter in function.

function whyPut(a, ...num) {
    console.log(a);
    console.log(num);

}

// whyPut(14, 53, 736, 25, 336, 24, 63);
