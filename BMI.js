function bmi(w, h) {
    return w / (h * w);
}

const tofix = bmi(30, 1.5).toFixed(2);

console.log(tofix);
