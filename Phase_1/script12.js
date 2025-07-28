//Truthy & Falsy.

//Falsy Nature
// 0, false, null , "", undefined, NaN, document.all;
//Rest of all will be true
//1,true," ", "0","false",

//> !!NaN
// false

// > !!null
// false

// > !!var
// !!var

//   ^^^

// Uncaught SyntaxError: Unexpected token 'var'

// > !!0
// false

// > !!false
// false

// > !!undefined
// false

// > !!document.all
// Uncaught ReferenceError: document is not defined

// > !!"
// !!"

//   ^

// Uncaught SyntaxError: Invalid or unexpected token

// > !!""
// false

// > !!"0"
// true

// > !!true
// true

// > !!"false"
// true

// > !!true
// true

// > !!1
// true

//typeof NaN == 'number' ??
//Because NaN statement is i am a result of failed numerical mathematical calculation. that's why i am returning you tha NaN.

// "harsh" +2
//NaN


//undefined vs Null


//predict the output->
//null+1 , undefined + null, null +object, true+false, null+true, null+null,!!undefined,!!undefined+true.

console.log(null + 1); //1
console.log(undefined + null); //NaN
console.log(null + Object); //nullfunction Object(){[native code]}
console.log(null + true);//1
console.log(null + null);//0
console.log(true + false);//1
console.log(!!undefined);//false

let x;
console.log(x); //undefined

let y = null;
console.log(y);//null
"5" + 1 // here the js will convert the 1 in string and then concatenate.
//'51'

"5" - 1 //minus will directly convert this string into number and perform its operations.
// 4

console.log("tarun" + null) // now here tarunnull.



