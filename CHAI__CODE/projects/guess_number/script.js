// console.log(parseInt(Math.random() * 100 + 1));

let randomNumber = parseInt(Math.random() * 100 + 1);

let submitButton = document.querySelector("#subt");
let userInput = document.querySelector("#guessField");
let guessSlot = document.querySelector(".guesses");
let remaining = document.querySelector(".lastResult");
let lowOrHigh = document.querySelector('.lowOrHigh');
let startOver = document.querySelector('.resultParas');
// console.log(submitButton);
// console.log(userInput);
const p = document.createElement('p');

let prevGuess = []; //for all previous guesses
let numGuess = 1;

let playGame = true;
if (playGame) {
    submitButton.addEventListener("click", function (dets) {
        dets.preventDefault();
        const guess = +(userInput.value);
        console.log(guess);
        validateGuess(guess);
    });
}

function validateGuess(guess) {
    // To validate  if the user is Comes under the range or not ..
    // May be its possible the user enter the negative value.\
    if (isNaN(guess)) {
        alert('Please Enter Valid Number');
    }
    else if (guess < 1 || guess > 100) {
        alert('Please Enter between 1 and 100');
    }
    else {
        prevGuess.push(guess);
        if (numGuess === 11) {
            displayGuess(guess);
            // alert('Your Game is Over', +randomNumber);
            endGame();
        }
        else {
            displayGuess(guess);
            checkGuess(guess);
        }
    }
}

function checkGuess(guess) {
    // IF the user guess Random value and entered Wrong.
    if (guess === randomNumber) {
        alert(`Success ${guess}`);
        endGame();
    }
    else if (guess < randomNumber) {
        alert(`Number is Too Low `);
    }
    else if (guess > randomNumber) {
        alert(`Number is Too High `);
    }
}
function displayGuess(guess) {
    // To SHow on UI to user
    userInput.value = '';
    guessSlot.innerHTML += `${guess}, `;
    numGuess++;
    remaining.innerHTML = `${11 - numGuess} `;
}

function displayMessage(message) {
    //Dom Manipulation 
    lowOrHigh.innerHTML = `<h2>${message}</h2>`;
}


function endGame() {
    //
    userInput.value = '';
    userInput.setAttribute('disabled', '');
    submitButton.setAttribute('disabled', '');
    // submitButton.classList.add("text-decoration: line-through;")
    p.classList.add('button');
    p.innerHTML = `<h3 id = "newGame">Start New Game</h3>`
    startOver.appendChild(p);
    playGame = false;
    newGame();
}
function newGame() {
    //

    const newGameButton = document.querySelector('#newGame');   

    newGameButton.addEventListener("click", function (dets) {
        randomNumber = parseInt(Math.random() * 100 + 1);
        prevGuess = [];
        numGuess = 1;
        guessSlot.innerHTML = '';
        remaining.innerHTML = `${11 - numGuess} `;
        userInput.removeAttribute('disabled');
        startOver.removeChild(p);
        playGame = true;

    });
}