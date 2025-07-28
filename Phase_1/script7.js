// Primitive Data Types in JavaScript:
// Primitive data types are the most basic data types in JavaScript. They are immutable (cannot be changed) and are not objects. There are 7 primitive data types:
// 1. String: Represents textual data. Example: "Hello", 'World', `Template`
// 2. Number: Represents numeric values (both integer and floating point). Example: 42, 3.14
// 3. Boolean: Represents logical entities. Can be either true or false.
// 4. Null: Represents the intentional absence of any object value. Example: null
// 5. Undefined: Represents a variable that has been declared but not assigned a value. Example: undefined
// 6. Symbol: Introduced in ES6, represents a unique and immutable value.
// 7. BigInt: Introduced in ES2020, represents integers with arbitrary precision. Example: 9007199254740991n

//String,NUmber,Boolean<null,undefined, Symbol, BigINt

//Array, Objets, Functions..

//String..

// '' - single 
//""- Double
// ``- backticks

let family = "Sisodia";

// let marks = new String(2357);

// let hum = new String("DSA Domination"); //String Objects..
let hum = "DSA Domination"; //String Primitive.

// let me = new String("Tarun"); //String Object.
let marks = "2357"; //String Primitive.
let me = 'Tarun';

let cllg = `Galgotias University`;
console.table([family, marks, hum, me, cllg])


//Numbers.

let count = 10;
let pi = 3.14
// let pi = (3.14-0.14)*n;//  this is not allowed to make a bigint you need a integer ..
//                          ReferenceError: n is not defined
count += pi; //Just adding and updating the code..

console.log(count);

const nan = new Number("at") //NaN
const PI = new Number(pi) //

console.log(PI);
console.log(nan); // [Numbre: NaN]

//Boolean 

let love = true
let happen = false

let sure = true + false + pi
let suredd = true + false
console.log(sure); // Taking False as 0 and true as 1. 1+0 =>1
console.log(suredd); // Taking False as 0 and true as 1. 1+0 =>1 + pi value

const world = new Boolean(true)
console.log(world);

//NUll
let nu;
console.log(typeof nu);

let wifename = null;

console.log(wifename);

wifename = "a-1z"

console.log(wifename);


// let sas = new null //TypeError: null is not a constructor
// console.log(sas);

let undefin = undefined;

undefin = "more than 20 times"

console.log(undefin);

let SAD = 1
console.log(SAD);

let ddd; //by default value undefined assigned..
console.log(ddd);

//Symbol

//To make the objects of any where something unique ..

let ui1 = Symbol("uid");
let ui2 = Symbol("uid");
console.log(ui1 === ui2);

let object = {
    uid: 1,
    name: "Harsh",
    age: 12,
    email: "test@gmail.com"
};
// object.uid = 12  // This will overwrite the uid of object.

let u1 = Symbol("uid");
object[u1] = "001"  // now we have added our own uid in object which is safe.
console.log(u1);
console.log(object);
console.log(typeof object);

//BigInt.

let big = 11n;

console.log(Number.MIN_SAFE_INTEGER);//-9007199254740991
console.log(Number.MAX_SAFE_INTEGER); //9007199254740991
//this is the BigInt below.
let max = 9925473452346409913234242n; // Okay now i got it.
console.log(max);
console.log(typeof max);

let bg = 12n;

max += bg;
console.log(max);

