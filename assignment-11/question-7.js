// Generate a secret number from 1 through 50; change userGuess to test it.
const secretNumber = Math.floor(Math.random() * 50) + 1;
const userGuess = 24;

console.log(`Your guess: ${userGuess}`);

// Exact matches are checked before the near-match range.
if (userGuess === secretNumber) {
  console.log("Correct guess!");
} else if (Math.abs(userGuess - secretNumber) <= 3 && userGuess >= 1 && userGuess <= 50) {
  console.log("Very close!");
} else {
  // Compare the guess with the secret number when it is not close.
  if (userGuess > secretNumber) {
    console.log("Too high");
  } else {
    console.log("Too low");
  }
}

console.log(`Secret number: ${secretNumber}`);