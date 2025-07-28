//Hoisting Diff b/w Function Expression and Declaration.
hoisting();







function hoisting() {
    console.log("Hui hui hui hui");
}

// function can be used in hoisting . means before creating any function you can call it ..
// in Variables is doesn't work and also with the function expression where you const counter = function(){ } do okay..

// checking()

 // now we can't access the function cuz we are using the function expression yahan variable m function store aur hum un declared initlizatin wle variable ko access krn ka try kr rheh .
//ReferenceError: Cannot access 'checking' before initialization




const checking = function () {
    console.log('6:AM');
}

