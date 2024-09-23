let randomNumber = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const result = document.querySelector('.result');
const startOver = document.querySelector('.resultParas');;

let p = document.createElement('p');

let prevGuess = [];
let numGuess = 1;
let playGame = true;
if(playGame){
  submit.addEventListener('click', function (e) {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    console.log(guess)
    validateGuess(guess);
  });
}

function validateGuess(guess) {
  if (isNaN(guess) ) { // string bhi yaha check ho jayegi bcz parseInt string ko convert nhi kar pata and vo phir NaN consider hota hai
    alert('PLease enter a valid number');
  } else if (guess < 1 || guess > 100) {
    alert('PLease enter a number in valid range( 1 <= number <= 100 )');
  } else {
    prevGuess.push(guess);
    if (numGuess === 10) {
      cleanUpGuess(guess);
      checkGuess(guess);
      if (guess !== randomNumber) {
        displayMessage(`Game Over. Random number was ${randomNumber}`);
      }
      endGame();
    } else {
      cleanUpGuess(guess);
      checkGuess(guess);
    }
  }
}

function checkGuess (guess) {
  if(guess === randomNumber){
    displayMessage(`You guessed it right!!`);
    endGame();
  } else if (guess < randomNumber) {
    displayMessage(`Number is TOO low (O_o)`);
  } else {
    displayMessage(`Number is TOO high ("_")`);
  }
}

function cleanUpGuess(guess) {
  userInput.value = ''; // to empty the curr val for next turn
  guessSlot.innerHTML += `${guess} `;
  numGuess++;
  remaining.innerHTML = `${11 - numGuess}`;
}

function displayMessage(message) {
  result.innerHTML = `<h2>${message}</h2>`;
}

function endGame() {
  userInput.setAttribute('disabled', '');
  p.classList.add('button');
  p.innerHTML = `<h2 id="newGame">Start new Game</h2>`;
  startOver.appendChild(p);
  playGame = false;
  newGame();

}

function newGame() {
  const newGameButton = document.querySelector('#newGame');
  newGameButton.addEventListener('click', function (e) {
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