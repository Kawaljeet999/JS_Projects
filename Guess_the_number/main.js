let randomNumber = parseInt(Math.random() * 100 + 1); // No Zero come then add 1

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaning = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p'); // for Start NewGame Button


let prevGuess = []
let numGuess = 1

let playGame = true // Show game is Active 

if (playGame) {
    submit.addEventListener('click', function (e) {
        e.preventDefault() // Prevent Page from refreshing
        const guess = parseInt(userInput.value)
        validateGuess(guess);
    });
}

function validateGuess(guess) {
    if (isNaN(guess)) {
        alert('Please enter a Valid Number');
    }
    else if (guess < 1) {
        alert('Please enter a number more than 1');
    }
    else if (guess > 100) {
        alert('Please enter a number less than 100');
    }
    else {
        prevGuess.push(guess) // push in array
        if (numGuess === 11) {
            displayGuess(guess)
            displayMessage(`Game Over. Random number was ${randomNumber}`)
            endGame()
        } else {
            displayGuess(guess)
            checkGuess(guess)
        }
    }
}

function checkGuess(guess) {
    if (guess === randomNumber) {
        displayMessage(`You Guessed Right`);
        endGame()
    } else if (guess < randomNumber) {
        displayMessage(`Number is TOO low`);
    } else if (guess > randomNumber) {
        displayMessage(`Number is TOO high`);
    }
}

function displayGuess(guess) {
    userInput.value = ''
    guessSlot.innerHTML += `${guess}, `;
    // += means: append to the current content(don't erase the old content; just add more to it).
    // `${guess}, ` is a template literal, which dynamically inserts the value of guess as a string, and adds a comma and a space after it.
    numGuess++;
    remaning.innerHTML = `${10 - numGuess}`;
}

function displayMessage(message) {
    lowOrHi.innerHTML = `<h2>${message}</h2>`;
}

function endGame() {
    userInput.value = '' // This line clears the guess so the user enter the guess which deleting the previous one
    userInput.setAttribute('disabled', '');
    p.classList.add('button')
    p.innerHTML = `<h2 id="newGame"> Start new Game </h2>`
    startOver.appendChild(p); // Adds the p element to the startOver(resultparas) container on the webpage.
    playGame = false
    newGame();
}

function newGame() {
    const newGameButton = document.querySelector('#newGame');
    newGameButton.addEventListener('click', function (e) {
        randomNumber = parseInt(Math.random() * 100 + 1);
        prevGuess = []
        numGuess = 1
        guessSlot.innerHTML = '' // Clears the previous guess display
        remaning.innerHTML = `${10 - numGuess}`
        userInput.removeAttribute('disabled')
        startOver.removeChild(p) // This line removes the "Start New Game" button from the page after the user clicks it and the new game starts


        playGame = true;
    });
}

