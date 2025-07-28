// Spread in Objects.

let use = {
    sim: "Jio",
    fiber: {
        airfiber: "Good",
        fiberOptic: "Best",
        satellite: "Great"
    },
};

// let obj = { ...use };
// let obj = { price: 999, ...use };

// let obj = Object.assign({}, use); 
let obj = Object.assign({ price: 999 }, use);
console.log(obj);


//Important..

//if our object is nested object then we will have to use.

let obj1 = {
    name: "Tarun",
    age: 99,
    price: 6600,
    address: {
        city: "Bhopal",
    }
};

//ab agr hum eski copy krne ki kosis krte h to address ki kabhi hi copy nhi hoti direct reference address pass ho jata h . mtlb agr jo bhi changes honge vo directly reflect honge address pr of original object.
// islye hume JSOn krke krna chahiye taki ye safely parse ho paya kre.

let obj2 = JSON.parse(JSON.stringify(obj1));
console.log(obj2);

//Optional Chaining..

console.log(obj1?.age);
console.log(obj1?.address?.city); //used in backend.


let role = "admin";

let obj3 = { [role]: "Tarun", ...obj2 };

let studentManagerApp = { name: "Student", age: 33, studentId: 2025 };

const user = {
    "Full-name": "Tarun Sisodia"
}

// user.full-name  not allowed okaayy !!!!!!!!!!

console.log(user["Full-name"]); //cuz humne yahan pr string pass kri h vo bhi das ke sath yani special symbol.

let key = "age";
const ss = {
    age: 22
};
console.log(ss[key]);


const satelit = {
    city: "Agra",
    coordinates: {
        lat: 123.13,
        lng: 232.34
    }
};

// satelit?.city;
// satelit?.coordinates?.lat;


// let { lat, lng } = satelit?.coordinates;

// console.log(lat, lng);

let { city } = satelit?.city;
console.log(satelit?.city);

let { 'Full-name': username } = user

console.log(username);
let rolee = "admin";
let meAdmin = "TT";
let me = {
    nae: "Tarun",
    [rolee]: meAdmin
}

console.log(me);

//Deep clone
const obj333 = { info: { score: 80 } };

const newobj2 = JSON.parse(JSON.stringify(obj333));

console.log(newobj2);

const person = {}

console.log(person?.profile?.name);
