'use strict';

// MANIPULATING THE TEXT CONTENT / VALUE OF SELECTORS
console.log(document.querySelector('.message').textContent); // READING THE TEXT CONTENT OF THE ".message" SELECTOR
// document.querySelector('.message').textContent = '🎉 Correct Number'; // MANIPULATING THE TEXT CONTENT OF THE ".message" SELECTOR

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;

// document.querySelector('.guess').value = 23; // ".value" PROPERTY IS READ FOR INPUT ELEMENT
// console.log(document.querySelector('.guess').value); // "23" WILL BE SEEN IN THE CONSOLE BECAUSE THE ".guess" SELECTOR HAD BEEN PREVIOUSLY MANIPULATED TO "23". THEREFORE, THE NEW VALUE IS NOW "23"

// 'let' KEYWORD IS USED DUE TO VARIABLE MUTATION IN THE FUTURE
let secretNumber = Math.trunc(Math.random() * 20) + 1; // THE SECRET NUMBER IS GENERATED OUTSIDE THE EVENT HANDLER BECAUSE, WE DON'T WANT IT TO BE GENERATED WHEN THE BUTTON IS CLICKED BUT AT THE BEGINNING OF THE SCRIPT
let score = 20;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

const displayScore = score => {
  document.querySelector('.score').textContent = score;
};

const gameLogic = function () {
  const guess = Number(document.querySelector('.guess').value); // AT DEFAULT VALUES GOTTEN FROM A USER INTERFACE (an input feild) IS ALWAYS A STRING BUT THIS CAN BE MANIPULATED TO A NUMBER USING THE "Number()" function
  console.log(guess, typeof guess);

  // WHEN THERE IS NO "INPUT"
  // THIS IS THE FIRST SCENERIO TO IMPLEMENT WHEN YOU ARE WORKING WITH AN "INPUT FIELD"
  if (!guess) {
    // AT FIRST WHEN NO VALUE IS PASSED INTO AN INPUT FEILD ITS VALUE IS "0". THEREFORE THE CONDITION IS IF GUESS IN NOT = 0 (NOTE: 0 IS A FALSY VALUE THEREFORE NOT(!) "FALSE" IS "TRUE")

    // document.querySelector('.message').textContent = 'No Number ⛔';
    displayMessage('⛔ No Number');

    // WHEN PLAYER WINS
  } else if (guess === secretNumber) {
    // document.querySelector('.message').textContent = '🎉 Correct Number';
    displayMessage('🎉 Correct Number');
    document.querySelector('.number').textContent = secretNumber;

    document.querySelector('body').style.backgroundColor = '#60b347';

    document.querySelector('.number').style.width = '30rem';

    // HIGHSCORE IMPLEMENTATION
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }

    // WHEN GUESS IS WRONG
  } else if (guess !== secretNumber) {
    if (score > 1) {
      // SO THAT ONCE THE SCORE IS ONE THE else BLOCK IS EXECUTED
      // document.querySelector('.message').textContent = guess > secretNumber ? '📈 Too high!' : '📈 Too low!';
      displayMessage(guess > secretNumber ? '📈 Too high!' : '📈 Too low!');
      score--;
      displayScore(score);
    } else {
      // document.querySelector('.message').textContent = '💥 You lost the game';
      displayMessage('💥 You lost the game');
      displayScore(0);
    }

    // When guess is too high
  } /*else if (guess > secretNumber) {
    if (score > 1) { 
      document.querySelector('.message').textContent = '📈 Too high!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '💥 You lost the game';
      document.querySelector('.score').textContent = 0;
    }

    // When guess is too low
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '📈 Too low!';
      score--;
      document.querySelector('.score').textContent = score;
    }  else {
    document.querySelector('.message').textContent = '💥 You lost the game';
    document.querySelector('.score').textContent = 0;
  } */
};

console.log(secretNumber);

document.querySelector('.check').addEventListener('click', function () {
  gameLogic();
});

// IMPLEMENTING THE KEYPRESS 'Enter' EVENT
// DONE😎 BY ME
document.addEventListener('keydown', function (e) {
  if (e.key === 'Enter') gameLogic();
});

// THEN
// document.querySelector('.again').addEventListener('click', function () {
//   secretNumber = Math.trunc(Math.random() * 20) + 1;
//   score = 20;

//   console.log(secretNumber);
//   document.querySelector('body').style.backgroundColor = '#222';
//   document.querySelector('.number').style.width = '15rem';
//   document.querySelector('.number').textContent = '?';
//   document.querySelector('.score').textContent = score;

//   // document.querySelector('.message').textContent = 'Start guessing...';
//   displayMessage('Start guessing...');
//   document.querySelector('.guess').value = '';
// });

// 14TH OF JANUARY 2024
document.querySelector('.again').addEventListener('click', function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  displayScore(score);
  console.log(secretNumber);
  document.querySelector('.number').textContent = '?';
  displayMessage('Start guessing...');
  document.querySelector('.guess').value = '';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('body').style.backgroundColor = '#222';
});
