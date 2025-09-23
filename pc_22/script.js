// PC 22 JavaScript file
// console.log("Hello from PC 22!");

// Your code here

const user = {
    username: "Tarun",
    loginCount: 8,
    signedIn: true,
    getUserDetails: function () {
        try {
            console.log(`Username : ${this.username}`); //To access the current username at right now global scope.
            // console.log(`Username :${username}`);
            // console.log(this);

        } catch (error) {
            console.log(`E:${error}`);
        }

        return 'Get the User Data in Database';
    }
}

console.log(user.username);
console.log(this); //Oh so we are getting empty object cuz of this / Object Literal.
console.log(user.getUserDetails());

function User(username, loginCount, isLoggedIn) {
    this.username = username
    this.loginCount = loginCount
    this.isLoggedIn = isLoggedIn
    this.greeting = function () {
        console.log(`Welcome: ${this.username}`);
    }
    return this;
}



//Now filling manual data in User function to check what is object.

// console.log(User('Tarun', 10, 12));
const usernew = new User('Enjo', 12, 25);
// const olduser = new User('ABoi', 21, 1);
// console.log(usernew);
// console.log(olduser);

console.log(usernew.constructor);
console.log(usernew.greeting('enjo'));




//now we will give the new keuword to make the space or memory diifferennt for theStudents
