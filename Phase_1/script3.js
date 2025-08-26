
//Temporal Dead Zone..

// console.log(tdz); //if the variable exists and we are accessing it before the variable initilization..
//  then-->Cannot access 'tdz' before initialization
// The variable doesn't exists then it will return us -- tdz is not defined.

// let tdz = "Dead Zone." // if the variable doesn't exists then it will return us                      ReferenceError: tdz is not defined

//tdz- utna area jitna m javascript ko pata h ki variable exists krta h but access nhi kr skti ..
// ... that is called the temporal dead zone.

// Temporal Dead Zone is the time between the start of the block and the variable declaration.
//  During this time, the variable is in a "dead zone" and cannot be accessed.

// console.log(tdz); //Cannot access 'tdz' before initialization

// console.log(tdz2); //ReferenceError: tdz2 is not defined
let tdz2 = "Dead Zone 2." // if the variable doesn't exists then it will return us ReferenceError: tdz2 is not defined

// console.log(tdz2); //Dead Zone 2.

let tdzd = "Some" //from the line 1 to here 104 line is the temporal dead zone for tdzd variable.


//REMEMBER---VAR DOESN'T HAVE TEMPORAL DEAD ZONE BECAUSE WE CAN ACCESS THE VAR  IN ANYWHERE. BEFORE INIITLIAZATIO. 

/*  Revised my Old Code Base.
console.log(tar);

let tar = "Tarun"; */