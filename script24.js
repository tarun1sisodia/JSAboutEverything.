//Closures-> ek function jo return kr rha h ek aur function but child function will call or use the variable of parent functions.

function parent() {
    let name = "Tarun";
    return function child() {
        console.log(name);
    }
}

const greet = parent();
greet();
//Here, greet() is using the value of name from parent() even though parent() has finished running. This is a closure.

// 📦 Why and Where Are Closures Used?
// 🔁 1. Data Privacy / Encapsulation
// Closures allow you to hide variables from the outer scope.

const secretCounter = function (getValue) {
    let count;
    count = getValue;
    return function () {
        ++count;
        console.log(count);
    }
    //unreachable code h ye jo kabhi nhi run hoga.
    console.log(count);
}
const double = secretCounter(3);

double(); // 3=> ++3=>4  // this is the way to call the function if we have make it a closure.

//❌ count cannot be accessed directly — it's private.


//2. Function Factories
// Closures let you generate customized functions.

((x) => { return (y) => { console.log(x * y); } })(2)(3);
//Both have very less different.
((x) => { return ((y) => { console.log(x * y); })(3); })(2);
//----------------^ A whole IIFE Function Defined   ^---------------//

const counter = (function () {
    let countt = 0;
    return () => {
        return ++countt;
    }

})();

console.log(counter()); //1
console.log(counter()); //2 
console.log(counter()); //3


// ((x) => {
//     return (y) => {
//         console.log(x * y);
//     }
// })(2)(3); // calling both IIFE function immedeatliy.. to run. 2 will be passed inside the x and 3 will be pased inside the y function.

// ((x) => {
//     return ((y) => {
//         let num;
//         num = x * y;
//         return num;
//     })(3);
// })(2);




























/*
function tarunKIGF() {   // This code has some issues which are fized in below once..
let name = 'gun';
    return function () {
        console.log(name);
    }
}

// tarunKIGF();


function abc() {
    let cool = 'Iron Man';
    return function () {
        return cool; //we are returning the Iron Man using Closure..
    }
}

// console.log(abc()());

//Lexical Scoping..
// From where the function starting and till the number of line it has .. the scope to access..

function abc() {
    let a = 1;
    console.log(`Inside of abc: ${a}`);
    // console.log(b); // b & c both are not declared and init , hum to esko direct bula aur rahe h to kese ayenge. dono socho dosto..
    // console.log(c); 

    function def() {
        //but yahan hum bula skte h a ko kyunki vo scope m h kyunki a parent function ke andar h jese ke bade bhaiya ke bike h a.. to chota bhai chala skta h.

        console.log(`Inside of def: ${a}`); // access ho skta h a..

        let b = 2;
        // console.log(b);

        function ghi() {
            //same yahan bhi a & b dono access ho skte h aur operations bhi laga skte h but c yahan se bahar use nhi ho skta h .
            let c = 3;

            console.log(`Inside of ghi:${a}`);
            console.log(`Inside of ghi:${b}`);
            console.log(`Inside of ghi:${c}`);
            return c;

        }
        return ghi();
    }
    return def();
}
console.log(abc());
// console.log(def());



//Mix example of closures and lexicals.

function cyber() {
    let hack = true;
    function inits() {
        return hack;
    }
    return inits()
}

console.log(cyber());
*/



