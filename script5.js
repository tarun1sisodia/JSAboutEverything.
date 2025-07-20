// Guess the Output of this..

console.log(nam); //undefined because of Hoisting.

var nam = "Tarun"


console.log(na); // ReferenceError: Cannot access 'na' before initialization

var na = "Na na na"

// We are accessing the variable in Temporal Dead zone and also the hoisting happens in var, let , const.

// This Undefined is only in var..

/*let ref = undefined

console.log(ref); //Here 17-21 Temporal Dead Zone is activated. 

ref = "Error";*/


// console.log(ref); //RefernceError -> cannot access ref before initiliazation.

let ref = "Error";


var x = 1; //Global Scoping now.

{
    var x = 2; //Global Scoping ..
}

console.log(x); // X = 1, then var is re declared and now it has value 2.


//Let is a block scope keyword..
let outerA = 10;

{
    let innerA = 20;
    console.log(`Inside A: ${innerA}`); // if the value isn't present in the  block then-->
    // ReferenceError: innerA is not defined

}
console.log(`Outside A: ${outerA}`);

const person = {
    name: "Tarss"
}

person.name = "Tarun Sisodia"

console.log(person.name);

// person = {} //TypeError: Assignment to constant variable.
