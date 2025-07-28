let myFruits = [10, 20, 30];

console.log(myFruits);
let curedFruits = myFruits.slice(1, 2);

console.log(curedFruits);

let names = ['Tarun', 'Rohit', 'Sanjay', 'Harsh'];

let sortnames = names.sort();
console.log(sortnames);

//Reverse the Sorted Array.

let RvrseSorted = sortnames.reverse();
console.log(RvrseSorted);

let am = [1, 2, 3, 4];
let square = am.map((val) => { return val * val; })
console.log(square);


let random = [41, 11, 51, 3, 5, 15, 23,];
let greaorThen10 = random.filter((a) => { return a > 30; });
console.log(greaorThen10);

//sum of reduce.

let sumOF = am.reduce((acc, val) => acc + val, 0);
console.log(sumOF);

//find less than 10.
let small = random.find((val) => val <= 10);
console.log(small);

//some below than 25 marks in class. true or false.

let someMarks = random.some((vl) => vl > 10);
console.log(someMarks);

//Every returns true or false for all. 

let newa = [2, 4, 6, 8];
let as = newa.every((v) => { return v % 2 === 0 });

console.log(as);

//Destructuring the Array.

let fullname = ["Hello", "Tarun"];

let [firstName, lastName] = fullname;

console.log(firstName);
console.log(lastName);

//Merge to Arrays using Spread Operator.

let a = [1, 2];
let b = [3, 4];

let c = [...a, ...b];

console.log(c);

//  add "India" to the beggining of the array.

let are = ['usa', 'uk'];

are = ['India', ...are];

console.log(are);
//we are just doing simple operation like we are just passing the india to the 0 index and rest of all data which is already available for array.

// CLone an array without using reference of the array.

let clone = [1, 3, 3];

let real = [...clone];
console.log(real);

