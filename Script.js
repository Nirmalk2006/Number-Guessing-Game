const randomnumber = parseInt(Math.random() * 100+ 1);
const guesses = document.querySelector('.guesses');
const lastResult = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.loworHigh');
const guessSubmit = document.querySelector('.btn');
const guessField = document.querySelector('#guess');
const startover = document.querySelector('.resultParas');
 const p = document.createElement('p');


let preguesses = [];
let numberofguesses = 1;
let playgame = true;

if(playgame) {
    guessSubmit.addEventListener('click', function(e) {
        e.preventDefault();
        const guess = parseInt(guessField.value);
        validateGuess(guess);
    });
}

function validateGuess(guess) {
        if(isNaN(guess)) {  
            displayMessage('Please enter a valid number');
        }
        else if(guess < 1 || guess > 100) {
            displayMessage('Please enter a number between 1 and 100');
        }
        else {
            preguesses.push(guess);
            if(numberofguesses === 11) {
                displayGuesses(guess);
                displayMessage(`Game Over! The number was ${randomnumber}`);
                endGame();
            }
            else{
                displayGuesses(guess);
                checkGuess(guess);
            }       
}
}

function checkGuess(guess) {
    if(guess === randomnumber) {
        displayMessage(`Congratulations! You guessed the number in ${numberofguesses} guesses!`);
        endGame();
    }
    else if(guess < randomnumber) {
        displayMessage('Too low! Try again!');
    }
    else if(guess > randomnumber) {
        displayMessage('Too high! Try again!');
    }
    
}

function displayGuesses(guess) {
         guessField.value = '';
         guesses.innerHTML += `${guess} `;
         numberofguesses++;
         lastResult.innerHTML = 11 - numberofguesses;
}
function displayMessage(message) {
    lowOrHi.innerHTML = message;
}

function  endGame() {
      guessField.value = '';
      guessField.setAttribute('disabled', "");
      p.classList.add('button');
      p.innerHTML = '<button id = "newgame">Start New Game</button>';
      startover.appendChild(p);
     playgame = false;
     newGame();
}

function newGame() {
  const newGameButton = document.querySelector('#newgame');
  newGameButton.addEventListener('click', function(e) {
    randomnumber = parseInt(Math.random() * 100 + 1);
    preguesses = [];
    numberofguesses = 1;
    guesses.innerHTML = '';
    lastResult.innerHTML = `${11 - numberofguesses}`;
    lowOrHi.innerHTML = '';
    guessField.removeAttribute('disabled');
    startover.removeChild(p);
    playgame = true;
  });
}
console.log(startover.contains(p));
