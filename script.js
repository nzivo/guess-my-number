'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;

let score = 20;
let highScore = 0;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    document.querySelector('.message').textContent = `No Number 😡`;
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = `Correct Number 🎉`;

    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').textContent = secretNumber;

    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector(
        '.message'
      ).textContent = `Oops wrong number 🥺 too high`;
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector(
        '.message'
      ).textContent = `Oops 🤕 you lost the game`;
      document.querySelector('body').style.backgroundColor = '#ff0000';
    }
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector(
        '.message'
      ).textContent = `Oops wrong number 🥺 Too low`;
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector(
        '.message'
      ).textContent = `Oops 🤕 you lost the game`;
      document.querySelector('body').style.backgroundColor = '#ff0000';
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.message').textContent = 'Start guessing...';

  document.querySelector('.number').textContent = '?';

  document.querySelector('.guess').textContent = '';

  document.querySelector('.score').textContent = score;

  document.querySelector('body').style.backgroundColor = '#222';
});
