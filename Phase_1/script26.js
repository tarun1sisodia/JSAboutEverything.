// Convert this code in Fat -Arrow Functions.

function multiply(a, b) {
    return a * b;
}
multiply(2, 2);


// Fat Arrow Function.

// const multiply = (a, b) => { return a * b; }

// multiply(3, 5);


function paras(name) { } //name is a parameter.

paras("Tarun")  // Tarun is an Argument


function working(a, b, c) { }

working(1, 2); // c will be undefined because we have not declaration of c.. ut rest of all are done

function sayHI(name = "Guest") {
    return console.log("HI " + name);
}

sayHI(); // Hi Guest 

//what does the ... operators mean in parameter.


function abc(a, b, c, ...val) {
    console.log(typeof val);
    console.log(a, b, c, val);

}

abc(122, 3, 5, 3, 5, 1, 4, 5);


function getScore(...scores) {
    let val = 0;
    scores.forEach((score) => {
        val += score;
    });
    console.log(val);

}
getScore(10, 12);

function ageCheck(age) {
    if (age < 18) return "Valid";
    else if (age > 18) return "Not Valid";
}

//new version of it.

function updateAgeCheck(Age) {

    let result = Age < 18 ? "Valid" : "Not Valid";

    return console.log(result);
}

updateAgeCheck(20);

function f() {
    return;
    // age return lika aur koi data ya variable nhi diya to bhi undefined hi ayega aur agr use nhi kiya return code m to bhi vahi return hoga jo abhi ho rha h.
}

// console.log(f()); // undefined because you are not returing anything.

//what does it mean when we say " functions are the first class citizens.."//
/* 😄
*"Functions are first-class citizens"** JavaScript ka ek **core concept** hai — simple words mein samjhaata hoon:

---

### 🔥 First-Class Citizens in JavaScript – Kya hota hai?

Jab hum kehte hain:

> **Functions are first-class citizens in JavaScript**, iska matlab hai:
> ➡️ Functions ko treat kiya ja sakta hai **jaise ek value/variable**.

---

### 📦 Matlab? Ye sab kuch possible hai:

1. ✅ **Store kar sakte ho variable mein**

   ```js
   const greet = function () {
     console.log("Hello");
   };
   ```

2. ✅ **Pass kar sakte ho function ko dusre function mein (as argument)**

   ```js
   function callMe(fn) {
     fn();
   }

   callMe(greet);
   ```

3. ✅ **Function return kar sakte hain dusre function ko (closure ka base concept)**

   ```js
   function outer() {
     return function inner() {
       console.log("Inside inner");
     };
   }

   const myFunc = outer();
   myFunc();
   ```

4. ✅ **Store in arrays, objects**

   ```js
   const arr = [function () { console.log("Hi"); }];
   arr[0]();
   ```

---

### 💡 Real Life Example:

Socho function ek parcel hai 📦

* Tum parcel ko **store** kar sakte ho (variable mein)
* Kisi ko **bhej** sakte ho (argument mein)
* Ya usme ek **dusra parcel** nikal ke de sakte ho (returning a function)

JavaScript mein function koi VIP nahi — bas ek normal value ki tarah hai — use kahin bhi le ja sakte ho 💼

---

### 🔄 Ye concept kyu important hai?

➡️ Because ye concept hi allow karta hai:

* Closures 🔐
* Higher-order functions 🚀
* Callbacks 📞
* Functional programming 💻

---

Agar tu chaahe to mai ispe ek LinkedIn post bhi likh deta hoon with real-world analogies.
Bol bhai — Hinglish post chahiye ya pure English?
*/

//Hof higher order functions..
/*🔝 What are Higher-Order Functions (HOFs)?
📌 Definition:
Wo function jo ya to kisi function ko accept kare as an argument OR koi function return kare — usse Higher-Order Function (HOF) kehte hain.

In short:
➡️ Function lete hain ya function return karte hain = Higher-Order Function

🔁 Real Life Example:
Soch, ek YouTube editor app hai:

Us app mein tum ek function de sakte ho (like filter video, trim audio).

App use karega tumhara diya hua function video edit karne ke liye.

Toh YouTube editor == Higher Order Function,
Aur tumhara diya hua filter function == Callback Function*/

let fun = function () { return console.log(" Fuck"); }
fun();

function abc(val) {
    return console.log(val);
}

abc(function () { // without name says anonymous.
    console.log("Killer ");
})

//Convert the impure function to pure function.

let total = 0;

function imPure(n) {
    total += n;
    console.log(total);
}

//Converting now.

let tot = 0;
function Pure(n) {
    let newTot = n;
    // newTot++;
    newTot += n;
}

function abc() {
    let val = "Tarun";
    return function def() {
        return val;
    }
}

console.log(abc()());


//Closures 


const closure = () => {
    let count = 0;
    return () => {
        count++;
        console.log(count);
    }
}

const run = closure();

run();
run();

function newClosure() {
    let count = 0;
    return function classic() {
        count++;
        console.log(count);
    }
}

const turnTheGoal = newClosure();
turnTheGoal();
turnTheGoal();
turnTheGoal();

//conver this normal function in IIFE;

function init() {
    console.log("Intialiazed.. W/0 IIFE.");
}
init();
//
(() => {
    console.log("Intialiazed..with IIFE.");
})();

//Real World example for IIFE.
(() => { let score = 50; })();

// console.log(score); // it is not efined cuz score is private...

// greet(); //ReferenceError: Cannot access 'greet' before initialization

const greet = function () {
    console.log("Hello Tarun");
}

// it will show an error cuz we are using the function expression not the function declaration/..

scoreSS();

function scoreSS() {
    console.log("Tarun your score is low and also your motivation..");
}

















