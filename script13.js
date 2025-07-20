//Operator's In js...

//Arithmetic,Comparison,Logical,Assignment,Unary, Binary,ternay.

//+,-,%,/,**      //Artithmetic
// =,==,===       //Comparison
//< >,<=,>=,!,!=,!==,!!     //Logical
// ?: 
// &&,|| 

//Artithmetic 

// "Tarun"+"sisodia"
// 'Tarunsisodia'

// "tarun"-'tarun'
// NaN

// 1+2
// 3

// 1-2
// -1

// 1*3
// 3

// 6%3
// 0

// 2%2
// 0

// 2/2
// 1

// 3/6
// 0.5

// 6/3
// 2

// 2**2
// 4

// 2**3
// 8

// 2**4
// 16



//Comparison..

//  2==2
// true

//  2===3
// false

//  2==="2"
// false


// 3>1
// true

// 4>=2
// true

// 4<=2
// false

// 2<6
// true

//logical 

// 2==2
// true

// 2===3
// false

// 2==="2"
// false

// > 12 !== "12"
// true
// > 3-2 != "1"
// false
// > 3-2 !== "1"
// true
// > 2!=2
// false
// > 2!==2
// false
// > 2!===2
// 2!===2
//     ^

// Uncaught SyntaxError: Unexpected token '='
// > 2!=2
// false
// > 2==2
// true
// > 2===2
// true
// > 2!=2
// false
// > 2!=3
// true
// > 2!==3
// true

// > 12>11
// true

// > 12>12
// false

// > 12>112
// false

// > 12<122
// true

// > 12<=123
// true

// > 12>=123
//false

//Assignment..

let a = 2;

a += 5; //a = a + 5; //7

console.log(a);

a -= 1; //6

console.log(a);

a *= 20; //120

console.log(a);

a /= 10; //12

console.log(a);

a %= 3; //0 , Reminder is 0 now.

console.log(a);


//Logical . && , ||

// && works on 1,0 

// 1, 0 = false
// 0, 1 = false
// 1, 1 = true
// 0, 0 = true

let singleSidedLove = true;

let doubleSidedLove = false;

if (singleSidedLove && doubleSidedLove == true) {
    console.log(`Mission Impossible...`);
}

if (singleSidedLove || doubleSidedLove == true) {
    console.log(`Mission Impossible...2`);

}

if (12 > 13) {
    console.log("False");
}
if (13 > 12) {
    console.log("True 13>12");
}

// > !!!12
// false

// > !!!!12
// true

// > !!12
// true

// > !!!!!!4
// true

// > !!!!'tarun
// !!!!'tarun
//     ^^^^^^

// Uncaught SyntaxError: Invalid or unexpected token
// > !!!!'tarun'
// true

// > !!tar
// Uncaught ReferenceError: tar is not defined
// > 12!!
// 12!!
//   ^

// Uncaught SyntaxError: Unexpected token '!'
// > !!12
// true

// > !!'12'
// true

// > !!'tarun'
// true

// > !!!"tarun"
// false

// > !!!!"arun"
// true

// > !!1
// true

// > !!12
// true

// > !1
// false


// + and - both can be used to convert a string into string. but remember the string value should be a number..

// > +"1"
// 1

// > 1+'.1'
// '1.1'

// > +'.1'
// 0.1

// > +'true'
// NaN

// > 1-'false'
// NaN

// > -'1'
// -1

// > -"12"
// -12

//  > +'2-1'
// NaN

let tarun = 21;

++tarun;

console.log(tarun);

// tarun++; // Updated but not fully.

console.log(tarun++); // no change only 22

let ageOfTarun = "21";

console.log(`${+ageOfTarun}`);

a = 1;

console.log(a++ + a) //3 // this converts the string into number and then it adds.

//Ternery
let numm = 3;

3 > 2 ? console.log('3 is big') : console.log('3 is less');

function terner(data) {
    console.log('Running the Data analyze.....');

    if (data == 'tarun') {
        console.log('We are now in String....');

        data == 'tarun' ? console.log('Tarun you are welcome') : console.log('You are not authorized')

        console.log(typeof data); //string
        console.log(typeof null); //object
        console.log(typeof Array); //function
        console.log(typeof []); //wrong output -> object.
        console.log(typeof Function); //Function.
        console.log(typeof NaN); //Number.

        //InstanceOf

        console.log(data instanceof Number);
        console.log(data instanceof String); //False

        let array = [1, 2, 3]

        console.log(array instanceof Array);
        //true is an Array that's why it returns Array. because its child of Array..

        console.log(array instanceof Function);

        console.log(+'1');
    }
}
terner("tarun")

let newMark = '1';

console.log(typeof newMark);

console.log(newMark instanceof String);

console.log(+newMark);

//Instance of always work with the Non-Primitive values(Prefences) , Array, Function, Objects.

let galgoti = ['my', 'class', 'mca']

console.log(galgoti instanceof Array); //true

let myclg = {
    name: "galogtias university",
}

console.log(myclg instanceof Object); //true

const guy = function () {
    console.log('I am not a guy,');

}

console.log(guy instanceof Function);// true


let x = 10;

let y = 20;

if (x > 5 && y > x) { //both condition should be true. or false.
    console.log("Great");
}
if (y > x || y <= x) {  // one of them should be true.
    console.log("Y is Greater and X is small .");
}


let admin = true;
let user = false;

if (admin || user) {
    console.log('Access Granted :');

}
else {
    console.log("Sorry You are not allowed");

}

let temp = 43;
if (!(temp < 40)) { // here the temp is actually bigger than 40 but we can't modify it becaues we have used the ! sign so it will convet the  condition into true.
    console.log('Hot');
}
else {
    console.log('Temperature is not hot. bro');

}

let truthy_falsy = 0;

if (truthy_falsy) {
    console.log('Truthy');
}
else {
    console.log('falsy');
}

// output is falsy cuz we are using 0 which is considered as falsy. value.

let score = 78;
// let score = 25;
let grade = score >= 90 ? "A" : score >= 75 ? "B" : score >= 60 ? "C" : "Fail";
// score is less than 90 not greater.
//yes score is greater than 75.
// score is greater than score 60.

console.log(grade);

// let points = 120;
let points = 10;


let status = points > 100 ? "Gold" : points > 75 ? "Silver" : "Bronze";

console.log(status); // Silver cuz you can't make the gold in your life.



let loggedIn = true;
let token = false;

let auth = loggedIn && token ? "Allow" : "Deny";

console.log(auth);

let ss = 3;
// let xx = ss++;
let xx = ++ss; // the ss will also update 

console.log(ss, xx); // ss -> 3 and it is post increament.

let mm = 10;

console.log(mm--); //10
console.log(mm); //9

let n = 5;
// n++->5  and now the ++n will be start from 6 and go to 7.

let esult = n++ + ++n;

console.log(esult);


let likes = 100;

function likepost() {
    return ++likes; //101
}

console.log(likepost()); //101
console.log(likes); //101 

let count = 5;

if (count-- === 5) {
    // if (--count === 5) {
    console.log("Matched");

}
else {
    // console.log("Not matched."); // okay gootaa.

}
console.log(!!'');
console.log(!!'Tarun'); // !! gives us the reality of the data, like as i used here the tarun name as you know if we write something inside the string then it becomes the string and now it is not the falsy value so. thats it.
//   FOr truthy and falsy values in using use !! to know that the data is truthy or falsy.
console.log(!!1);
console.log(!!false);
// THis is very significant method to use like in big function or not code we want to know that is it containing any truthy of falsy values.


