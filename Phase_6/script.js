



let li = document.querySelectorAll("li");

li.forEach((val) => {
    // console.log(val.innerHTML);
    // console.log(val.innerText);
    console.log(val.textContent);
    // console.dir(val);
});
//Just Checking that it works or not as array says.
console.log(li[0]);

//innerHTML used for HTML change

let heading = document.querySelector('h1');
//le bhai kr diya change h1 ke andar hi gusa diya paragraph.
heading.innerHTML = "<p>Tarun</p>";

console.log(heading);
//mene abhi abhi HTML he change krdi

// diff b/w textContent and innerHTML.

let textC = document.querySelector('h2');

// console.log(textC);

let spa = document.querySelector('span');

spa.hidden = true;
//ab hume Span ka content dekhne ko milega kyunki text Content Sara utha lega .
console.log(textC);

