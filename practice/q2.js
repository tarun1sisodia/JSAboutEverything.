// Sum of All Array ..

function sumOfArry(...val) {
    let result = 0;
    for (let i = 0; i <= val.length; i++) {
        result += val[i];
        console.log(result);
    }
}

sumOfArry(5, 5, 5);