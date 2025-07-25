//Array -- is an special object


//How to Create an Array.
let arr = [1, 2, 3, 4, 5];

//How to Access the arrray.
console.log(arr);

let myArray = new Array('Tarun');
let myArray2 = new Array(1, 2, 3, 4, 5);
let myArray3 = new Array('a', 1, 3, 4);

console.log(myArray);
console.log(myArray2);
console.log(myArray3);

//All of the above are array and they are working fine because i have declared them using the Array Contrustor that is used by new keyword.


//How to Modify the Array.

myArray2[2] = 2;
console.log(myArray2);

//Create an Array using the Mixture of Closure ,IIFE & Hositing.
collab();

function collab() {
    return (() => {
        let arr = [10, 20, 30, 40];
        return function () {
            // console.log(arr);
            arr[2] = 0;
            arr[3] = 0;
            // console.log(arr);
        }(); //callling the 2nd function. Child
    })(); //calling the 1st Function. Parent.
}

//Methods in Array are important to get access of the array .

arr.push('End of Array');
// console.log(arr);

arr.pop();// Removes the LAST element of array.
// console.log(arr);

const size = arr.length; // Property of array that is used to get the legth of array. 
// length() -> if we use this right now here then we will be getting the error.. function is not defined.
// console.log(size);

//Shift remove the first element of the array.

arr.shift();  // if we use multiple shift() functions then the array size will reduce from first. like that
//                                                                           arr.shift();  // [2,3,4,5];
//                                                                           arr.shift(); // [3,4,5];
// console.log(arr);

//Unshift is the reverse of the shift 
// it just add the element from 1st index;

arr.unshift('a'); // ['a',2,3,4,5]
// console.log(arr);
arr.unshift('b'); // ['b','a',2,3,4,5]
// console.log(arr);
arr.unshift('c'); // ['c','b','a',2,3,4,5]
// console.log(arr);
arr.unshift('d'); // ['d','c','b','a',2, 3,4,5]
// console.log(arr);

//To Remove Specific Data from Array.

// arr.splice(2, 2); // from index 2 to 4 th index. 
// console.log(arr);
arr.splice(0, 1); // from index 1 to index 2 remove them from array.
// console.log(arr);

let newArr = arr.slice(0, 2); // we are making a copy of arr and the new array will be carrying 2 elements..
// console.log(newArr);  // we will be getting the c and b which are the elements of our beautiful array. So i think you got it not then code again and again.

// ONe Thing i like to alone.. alone.. alone.

//Don't like Girls nearby me when i code.. they are distraction for me.

arr.reverse();  // this method change the original array. 
// and it reference to same array.

let newMap = arr.map(() => {
    return 2;
});

// console.log(newMap);

//sorting in asc = a-b;

let ascSort = arr.sort((a, b) => { return a - b; });

// console.log(ascSort);

let dscSort = arr.sort((a, b) => { return b - a; });

// console.log(dscSort);

//ForEach is -> goes t every element and whatever we want to do we can on that array.

arr.forEach((val, index) => {
    console.log(`ForEach-> ${val} & index: ${index}`);
});

//Map creates an new array.. 

const mapArr = arr.map(() => { return 1; });
console.log(mapArr); // now what we are doing is we are returing the 1 from the system..
// we are returning 1 at every index of array.. [1,1,1,1,1,1];

const advanceArr = mapArr.map(() => { return Math.floor(Math.random() * 10 + 1); });
// now i have just passing the random number to array..
console.log(advanceArr);

const addedForEach = arr.forEach((val) => {
    const newVal = val + Math.floor(Math.random() * 10 + 1);
    console.log(newVal);

})

//if we didn't pass the return then the map will undefined..

let newArrMap = arr.map((val) => {
    if (val > 2) return val;
    //we didn't make the else so if fails then rest of the indexes will be get the undefined.
});

console.log(newArrMap);

//Reduce ..
let arr1 = [1, 2, 1, 4, 5, 6];

let ans = arr1.reduce((acc, val) => { return acc + val }, 0);

console.log(ans);

// Find.. returns first element when find..

let va = arr1.find((val) => { return val === 1; })

console.log(va);

//Some..
// to find specific data.

let someArr = arr1.some((val) => { return val > 3; });// true or false returns only.
console.log(someArr);

//find.. to specific data 
let findArr = arr1.find((val) => { return val > 3; });

console.log(findArr);

//find returns only one or not..

//Every .... checks in whole array to match every element is satifying the condition of every..

let eve = arr1.every((val) => { return val > 2; });
//2 is greater then 1 .. our array has 1 so answer will be false..
console.log(eve);


