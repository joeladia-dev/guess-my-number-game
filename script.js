'use strict';

// Variables
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

// Message Function - Refactored
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};
// Check function - Check Button
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  // When there is no input
  if (!guess) {
    displayMessage('⛔ No Number');

    //When player wins the game
  } else if (guess === secretNumber) {
    displayMessage('🎉 Correct Number');

    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';

    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.title').textContent = '🥳 You Won The Game! 🥳';

    // Highscore
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }

    // When guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? '📈 Too High!' : '📉 Too Low!');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.title').textContent = 'You Lose! Try Again';
      displayMessage('💥 You Lost The Game 😥');
      document.querySelector('.score').textContent = 0;

      document.querySelector('.number').style.width = '30rem';
      document.querySelector('body').style.backgroundColor = '#B22222';
    }
  }

  // Reset function - Again Button
  document.querySelector('.again').addEventListener('click', function () {
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;

    displayMessage('Start guessing...');
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';
    document.querySelector('.title').textContent = 'Guess My Number!';

    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
  });
});
