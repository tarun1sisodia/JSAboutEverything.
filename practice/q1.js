//Reverse a String..

function RevStr(str) {
    let string = str;
    return function () {
        for (let i = string.length; i >= 0; i--) {
            let revstring = string[i - 1];
            console.log(revstring);
            // return revstring;
        }
    }
}
// RevStr("Tarun");
// console.log(RevStr("dcba")());
// console.log(RevStr("dcba"));//returns function anonymous.

// const r = RevStr();
// r("Tarun");


function stringReverse(string) {
    let newString = [];
    for (let i = string.length; i >= 0; i--) {
        newString += string[i];
        // console.log(string[i]);

        // console.log(typeof element);
    }
    console.log(newString);

    // return string; //not working right now.
}


stringReverse("Tarun");

