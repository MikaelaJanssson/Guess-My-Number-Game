'use strict';
let secretNumber = Math.trunc(Math.random() * 20 + 1);
let score = 20;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  //When there is no input
  if (!guess) {
    displayMessage(' ⛔ No number!');

    // When player wins
  } else if (guess === secretNumber) {
    displayMessage('Correct Number! 🎉');
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('.number').style.width = '30rem';

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }

    // When guess is wrong
  } else {
    if (score > 1) {
      document.querySelector('.message').textContent =
        guess > secretNumber
          ? ' 📈 Number is too high'
          : ' 📉 Number is too low';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage(' 💥 Game Over');
      document.querySelector('.score').textContent = 0;
    }
  }
});

// Play the game again
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20 + 1);

  displayMessage('Start guessing...');
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.guess').value = '';
});
