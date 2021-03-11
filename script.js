'use strict';

const number = document.querySelector('.number');
const guessInput = document.querySelector('.guess');
const againBtn = document.querySelector('.again');
let secretNum = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

guessInput.addEventListener('keypress', function (e) {
  if (e.key === 'Enter') {
    checkGuess();
  }
});

document.querySelector('.check').addEventListener('click', checkGuess);

againBtn.addEventListener('click', reset);

function checkGuess() {
  const guess = Number(guessInput.value);
  // no input
  if (!guess) {
    displayMessage('💢 No number!');

    // the player wins
  } else if (guess === secretNum) {
    number.textContent = secretNum;
    displayMessage('🏆 The number is correct');
    document.querySelector('body').style.backgroundColor = '#46b700';
    number.style.width = '30rem';
    // set highscore
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  } else if (guess !== secretNum) {
    if (score > 1) {
      displayMessage(guess > secretNum ? 'Too high!' : 'Too low!');
      score--;
      displayScore(score);
    } else {
      displayMessage('😈 You lost the game!');
      displayScore(0);
    }
  }
}

function displayScore(num) {
  document.querySelector('.score').textContent = num;
}

function displayMessage(msg) {
  document.querySelector('.message').textContent = msg;
}

function reset() {
  score = 20;
  displayScore(score);
  secretNum = Math.trunc(Math.random() * 20) + 1;
  displayMessage('Start guessing...');
  number.textContent = '?';
  number.style.width = '15rem';
  guessInput.value = '';
  document.querySelector('body').style.backgroundColor = '#222';
}
