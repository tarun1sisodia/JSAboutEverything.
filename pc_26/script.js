/* // PC 26 JavaScript file
console.log("Hello from PC 26!");

// Your code here
class User {
    constructor(username, email, password) {
        this.username = username;
        this.email = email;
        this.password = password;
    }

    encryptPassword() {
        return `${this.password}abc`;
    }

    changeUserName() {
        return `${this.username.toLowerCase()}`
    }

}

// if we want to know what the encrypted Password:

console.log(chai.encryptPassword());
console.log(chai.changeUserName());
*/

//Behind the scenes;

function User(username, email, password) {
    this.username = username;
    this.email = email;
    this.password = password;
}

User.prototype.changeUserName = function () {
    return `${this.username.toLowerCase();}Its Safe`;
}
const chai = new User("CHai", "chai@gmail.com", "1239128");
console.log(chai);

// if we want to know what the encrypted Password:

// console.log(chai.encryptPassword());
console.log(chai.changeUserName);