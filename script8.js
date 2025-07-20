let array = [1, 2, 3, 4]

console.log(array); // This is the Orignal Array but the Reference of Array is also passed here.

let refArray = array

// refArray.pop() // Removed element from original Array.

console.log(refArray);


array.forEach(element => {
    // array.pop()
});
for (let index = 0; index < array.length; index++) {
    // array.pop()
    console.log(array);
}

console.log(array); // This is the Orignal Array but the Reference of Array is also passed here.