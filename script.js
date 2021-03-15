'use strict';

const secretNumber = Math.trunc(Math.random() * 20) + 1;

let score = 20;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    document.querySelector('.message').textContent = `No Number 😡`;
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = `Correct Number 🎉`;

    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').textContent = secretNumber;
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
