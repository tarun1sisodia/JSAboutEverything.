//Object
/*
let obj = {}; //This is a blank Object.

let me = {
    name: "Tarun",
    age: 21
};
// me[name] & me[age] both cannot be done because did not define.
// console.table(me.name, me.age);
console.log(me.name);
console.log(me.age);
console.log(me.name = 'Harsh');

// console.log(me[name]);


let newAge = "age";
me[newAge] = 22;

console.log(me[newAge]);
*/
//Deep Object.

const user = {
    name: "Harsh",
    address: {
        city: "Bhopal",
        pin: 462001,
        location: {
            lang: 33.3,
            lat: 42.3
        },
    },
    accounts: {
        adult: true,
        fb: "tarun1sisodia",
        slack: "tarun1sisodia",
    }
};


//De Structuring the Object.

let { adult, fb, slack } = user.accounts;

let obj = {
    name: "Tarun",
    age: 22,
    married: false
};

for (let key in obj) {
    console.log(key);
}

for (let key in obj) {
    console.log(key, obj[key]);

}

let ha = {
    named: "Purav Jha",
    age: 26
};

for (const key in ha) {
    console.log(key, ha[key]);

}



