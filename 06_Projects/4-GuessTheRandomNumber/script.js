// Generate a random number between 1 and 100
let randomNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;
let previousGuesses = [];

 const checkGuess=()=> {
  // Get the user's guess from the input field
  let guess = parseInt(document.getElementById('guess').value);

  let result = document.getElementById('result');

  // Get the attempts element
  let attemptsElement = document.getElementById('attempts');

  // Get the previous guesses element
  let previousGuessesElement = document.getElementById('previous-guesses');

  if (isNaN(guess) || guess < 1 || guess > 100) {
    result.textContent = 'Please enter a valid number between 1 and 100.';
    return;
  }
  attempts++;

  // Checking if the guess is correct
  if (guess === randomNumber) {
    result.textContent = 'Congratulations! You guessed the correct number in ' + attempts + ' attempts.';
    document.getElementById('guess').disabled = true;
    document.getElementById('restart-button').style.display = 'block';
  } else if (guess < randomNumber) {
    result.textContent = 'Too low. Try again.';
  } else {
    result.textContent = 'Too high. Try again.';
  }
  previousGuesses.push(guess);

  // Update the previous guesses element and the attempts element
  previousGuessesElement.textContent = 'Previous Guesses: ' + previousGuesses.join(', ');

  attemptsElement.textContent = 'Attempts Remaining: ' + (10 - attempts);

  // Check if the maximum number of attempts has been reached
  if (attempts === 10) {
  result.textContent = 'Game over. You did not guess the correct number. The number was ' + randomNumber + '.';
  result.style.color='orange'
    document.getElementById('guess').disabled = true;
    document.getElementById('restart-button').style.display = 'block';
  }
}
//we need to restart the game too
const restartGame=()=> {
  randomNumber = Math.floor(Math.random() * 100) + 1;
  attempts = 0; //resets attempst to 0
  previousGuesses = []; // clearing array
  document.getElementById('guess').value = '';

  // Enable the guess input field
  document.getElementById('guess').disabled = false;

  // Clear the result element
  document.getElementById('result').textContent = '';

  // Clear the attempts element
  document.getElementById('attempts').textContent = '';
  document.getElementById('previous-guesses').textContent = '';

  document.getElementById('restart-button').style.display = 'none';
}