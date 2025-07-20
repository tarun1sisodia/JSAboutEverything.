//Pure vs impure Functions.

// Pure functions -> esa function jo bahar ki value ko na badle.

let a = 1;

function print() {
    console.log("Tarun");
}


//Impure -> esa function jo bahar ki value ko change kr de.

let c = 0;
function prinnt(num) {
    c++;
    console.log(c);
    
}

prinnt(5);
