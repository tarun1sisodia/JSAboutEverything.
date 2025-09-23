// PC 24 JavaScript file
console.log("Hello from PC 24!");

let myName = "Tarun";
let myCode = "VS       ";
console.log(myName.length);
console.log(myCode.length);

// Remove the White Spaces.
console.log(myCode.trim().length);

// Now our challenge is to find the way method to get the whitespaces.
// console.log((myCode.trueLength));

let myHeros = ['IronMan', 'Thanos', 'Doom', 'SpiderMan', 'Thor', 'BlackPanther'];

Object.prototype.SayHi = function () {
    return 'Hello Heroes Thanks for all';
}

console.log(myHeros.SayHi());


let myPowers = {
    username: "Batman",
    power: "Rich",
    getPowers: function () {
        return "I'm not Good as i show"
    },
};

Object.prototype.hitesh = function () {
    return 'yeah, Its Fine';
}
console.log(myPowers.hitesh());

Array.prototype.saySize = function () {
    console.log(` MyHeroes Size : ${myHeros.length}`);
}

myHeros.saySize();

// myPowers.saySize();  // Its not an array and its out scope so not able to access.

const User = {
    name: "Chai",
    email: "Chai@google.com"
};

const Teacher = {
    makeVideo: true
};

const TeacherSupoport = {
    isAvailable: false
};

const TASupport = {
    makeAssignment: "JS Assignment",
    fullTime: true,
    __proto__: TeacherSupoport,
    // __proto__: Teacher
};

Teacher.__proto__ = User;


//NOW this is the modern code style of object how to assign and use it.

Object.setPrototypeOf(TeacherSupoport, Teacher);

console.log(TeacherSupoport);


let myString = "String      ";

String.prototype.trueLength = function () {
    // console.log(this);
    // console.log(`${this.name}`); //old way but now not used and depreciated
    return this.trim().length;

}

console.log(myString.trueLength());

console.log("Tarun     ".trueLength());
console.log("What                ".trueLength());


