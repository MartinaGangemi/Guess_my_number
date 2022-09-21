'use strict';

let score = 20;

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    displayMessage('⛔ No number!');

    //win
  } else if (guess === secretNumber) {
    displayMessage('🎉 Correct Number!');
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    //highscore
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }

    //guess wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      if (guess > secretNumber && guess <= 20) {
        displayMessage('📈 Too high!');
        score--;
      } else if (guess < secretNumber && guess > 0) {
        displayMessage('📉 Too low!');
        score--;
      } else {
        displayMessage('Between 1 and 20!');
      }

      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('💣 You lost the game!');
      document.querySelector('.score').textContent = 0;
      document.querySelector('body').style.backgroundColor = 'red';
    }
  }
});

//reset the game
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  document.querySelector('.number').textContent = '?';
  displayMessage('Start guessing...');
  document.querySelector('.number').style.width = '15rem';
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.score').textContent = 20;
  document.querySelector('.guess').value = '';
});
