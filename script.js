'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;

let score = 20;
let highScore = 0;
// Refactoring functions
const displayMessage = function (showMessage) {
  document.querySelector('.message').textContent = showMessage;
};

function displayNumber(showNumber) {
  document.querySelector('.number').textContent = showNumber;
}

function changeBg(showColor) {
  document.querySelector('body').style.backgroundColor = showColor;
}

const displayScore = function (showScore) {
  document.querySelector('.score').textContent = showScore;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    displayMessage('No Number 😡');
  } else if (guess === secretNumber) {
    displayMessage('Correct Number 🎉`');
    changeBg('#60b347');
    displayNumber(secretNumber);

    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(
        guess > secretNumber
          ? 'Oops wrong number 🥺 too high'
          : 'Oops wrong number 🥺 too low'
      );
      score--;
      displayScore(score);
    } else {
      document.querySelector(
        '.message'
      ).textContent = `Oops 🤕 you lost the game`;
      changeBg('#ff0000');
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.guess').textContent = '';
  displayMessage('Start guessing...');

  displayNumber('?');

  displayScore(score);

  changeBg('#222');
});
