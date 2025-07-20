
// Object -> Everything is js is a object..
//object let a , key values.

let a = {
    name: "Harsh" //Key and value of object a created using a.
}

// console.log(a.name);

let b = a; //Reference of a passing to b. //Refernce by means address of that object.

b.name = "Harishta"

// console.log(b.name);


let username = {// an object of containing key and value
    name: "tarun"
}
console.log(username.name); //calling the object and its key. and the value will be printed

username = "Harsh" //Updating the username variable and now the variable data type is changed.
console.log(username);

console.log(username.name); // Now it is passing undefined , because now it doesn't know that the name is existing or not.


