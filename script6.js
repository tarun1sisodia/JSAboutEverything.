//Data Types.

//Data ke types..

// Primitive and Non-primitive(References)

let a = 10; // A number type of data.

let b = a; // Now b has its own value if we change the a the doesn't change the value of b..
console.log(`A: ${a}`);

a += 2; //Updating the value of a.
console.log(`Updated A: ${a}`);

console.log(`B: ${b}`);

let iroman = "RDJ"
console.log(`${iroman} is no longer IronMan`);

let doom = iroman

console.log(`${iroman} is now DR. Doom`);


let love = ['care', 'trust', 'fight'];

let noStrings = love;

console.log(noStrings);
// console.log(typeof noStrings);
// console.log(love);

noStrings.pop() //Removing the last element or data from array. 

console.log(noStrings); // now the real array will also updated because we have just remove the element from original array using its refernces.
console.log(love);


