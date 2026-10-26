// Generate two operands and one arithmetic operator for a random quiz.
const firstNumber = Math.floor(Math.random() * 20) + 1;
const secondNumber = Math.floor(Math.random() * 20) + 1;
const operators = ["+", "-", "*", "/"];
const operator = operators[Math.floor(Math.random() * operators.length)];
let correctAnswer;

// Use a switch so each supported operator has a clear calculation.
switch (operator) {
  case "+":
    correctAnswer = firstNumber + secondNumber;
    break;
  case "-":
    correctAnswer = firstNumber - secondNumber;
    break;
  case "*":
    correctAnswer = firstNumber * secondNumber;
    break;
  case "/":
    correctAnswer = (firstNumber / secondNumber).toFixed(2);
    break;
  default:
    throw new Error("Unsupported math operator.");
}

console.log(`Question: ${firstNumber} ${operator} ${secondNumber} = ?`);
console.log(`Correct answer: ${correctAnswer}`);