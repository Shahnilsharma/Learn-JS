// Generate a random number between 1 and 100
let randomNumber = Math.floor(Math.random() * 100) + 1;

// Initialize the number of attempts
let attempts = 0;

// Array to store previous guesses
let previousGuesses = [];

// Function to check the user's guess
function checkGuess() {
  // Get the user's guess from the input field
  let guess = parseInt(document.getElementById('guess').value);

  // Get the result element
  let result = document.getElementById('result');

  // Get the attempts element
  let attemptsElement = document.getElementById('attempts');

  // Get the previous guesses element
  let previousGuessesElement = document.getElementById('previous-guesses');

  // Check if the guess is a valid number between 1 and 100
  if (isNaN(guess) || guess < 1 || guess > 100) {
    result.textContent = 'Please enter a valid number between 1 and 100.';
    return;
  }

  // Increment the number of attempts
  attempts++;

  // Check if the guess is correct
  if (guess === randomNumber) {
    result.textContent = 'Congratulations! You guessed the correct number in ' + attempts + ' attempts.';
    document.getElementById('guess').disabled = true;
    document.getElementById('restart-button').style.display = 'block';
  } else if (guess < randomNumber) {
    result.textContent = 'Too low. Try again.';
  } else {
    result.textContent = 'Too high. Try again.';
  }

  // Add the guess to the previousGuesses array
  previousGuesses.push(guess);

  // Update the previous guesses element
  previousGuessesElement.textContent = 'Previous Guesses: ' + previousGuesses.join(', ');

  // Update the attempts element
  attemptsElement.textContent = 'Attempts Remaining: ' + (10 - attempts);

  // Check if the maximum number of attempts has been reached
  if (attempts === 10) {
  result.textContent = 'Game over. You did not guess the correct number. The number was ' + randomNumber + '.';
  result.style.color='orange'
    document.getElementById('guess').disabled = true;
    document.getElementById('restart-button').style.display = 'block';
  }
}

// Function to restart the game
function restartGame() {
  // Generate a new random number
  randomNumber = Math.floor(Math.random() * 100) + 1;

  // Reset the number of attempts
  attempts = 0;

  // Clear the previous guesses array
  previousGuesses = [];

  // Clear the guess input field
  document.getElementById('guess').value = '';

  // Enable the guess input field
  document.getElementById('guess').disabled = false;

  // Clear the result element
  document.getElementById('result').textContent = '';

  // Clear the attempts element
  document.getElementById('attempts').textContent = '';

  // Clear the previous guesses element
  document.getElementById('previous-guesses').textContent = '';

  // Hide the restart button
  document.getElementById('restart-button').style.display = 'none';
}