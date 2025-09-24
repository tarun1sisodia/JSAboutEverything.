// PC 25 JavaScript file
console.log("Hello from PC 25!");

// Your code here
function Setusername(username) {
    this.username = username; // this will be gayab after executing.. that why we all should use 
    console.log(`Rn it is Running:`);

}
function CreateUser(username, email, password) {
    Setusername.call(this, username);
    // Setusername(username); // Rn it will not run cuz we did not call it properly.
    this.email = email
    this.password = password
}

const chai = new CreateUser("Tarun", "Aisodia", '1231');
console.log(chai);

