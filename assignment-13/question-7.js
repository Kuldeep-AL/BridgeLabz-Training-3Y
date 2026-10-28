"use strict";

const operations = ["add", "divide", "power", "root", "subtract", "modulo"];
const num1 = 25;
const num2 = 0;

class InvalidOperationError extends Error {}
class CalculationError extends Error {}

function calculate(operation, first, second) {
  switch (operation) {
    case "add":
      return first + second;
    case "divide":
      if (second === 0) {
        throw new CalculationError("Cannot divide by zero.");
      }
      return first / second;
    case "power":
      return first ** second;
    case "root":
      if (first < 0) {
        throw new CalculationError("Cannot find the real square root of a negative number.");
      }
      return Math.sqrt(first);
    case "subtract":
      return first - second;
    default:
      throw new InvalidOperationError(`Operation "${operation}" is not supported.`);
  }
}

console.log("Smart Calculator Summary");
console.log(`Inputs: ${num1} and ${num2}`);

for (const operation of operations) {
  try {
    const result = calculate(operation, num1, num2);
    console.log(`${operation.padEnd(8)} | result: ${result}`);
  } catch (error) {
    console.log(`${operation.padEnd(8)} | ${error.name}: ${error.message}`);
  }
}

try {
  calculate("root", -25, num2);
} catch (error) {
  console.log(`root(-25) | ${error.name}: ${error.message}`);
}
