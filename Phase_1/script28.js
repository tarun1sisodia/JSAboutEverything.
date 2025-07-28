let arr = [1, 2, 3, 4, 5];

console.log(arr);

let [a, b, , c] = arr;

// Destructuring the arr.. we are taking values from index 0,1, not including c, and 3.

//Spread Operator..

let spArr = arr; // if we do this . the  Reference of the main Array will be passed to the spread arry.

// Another Safe Way to use Spread and Copy the Array.

let sps = [...arr];

console.log(sps);

//Practice Time...
//Create an array which contains 3 elements and print the second element.
let fruits = ['apple', 'banana', 'guava']
console.log(fruits[1]);

//Add "Mango" at the end of this Arry and "Pineapple" to the beggining of this array.

fruits.push("Mango");
fruits.unshift("PineApple.");

console.log(fruits);

//Replace "Banana" with kiwi.

// fruits.splice(2, 1, "Kiwi"); // index 2 and remove the element is 1 itself the index 2..

console.log(fruits);

//Push adds to last of arry.

//unshift replace the element and remove the elements from where you want.
((val, newVal) => {
    let a = val.toLowerCase();

    for (let i = 0; i < fruits.length; i++) {
        if (fruits[i] === a) {
            fruits[i] = newVal;
            console.log(`Cograts Replaced the "${a}" with "${newVal}"`);
        }
        else {
            console.log(`Doesn't find ${fruits[i]}`);
        }
    }
    console.log(fruits);

})("Banana", "Kiwi");
