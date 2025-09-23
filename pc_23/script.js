// PC 23 JavaScript file
console.log("Hello from PC 23!");

// Your code here

const newHero = ['New_Avenger', 'Doom'];
console.log(newHero);


function createUser(username, price) {
    this.username = username
    this.price = price
    // return this;
};
createUser.prototype.increment = function () {
    this.price++;
}
createUser.prototype.printMe = function () {
    console.log(`Price is: ${this.price}`);

}
const chai = new createUser("CHAI", 25);
// console.log(chai);
chai.printMe();
chai.increment();
chai.printMe();
