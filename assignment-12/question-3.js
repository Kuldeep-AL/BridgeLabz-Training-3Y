// Sample input for the math dashboard.
const x = 16.75;
const roundedValue = Math.round(x);
const squareRoot = Math.sqrt(x);
const cubedValue = Math.pow(x, 3);
const randomValue = Math.floor(Math.random() * 41) + 10;

// Template literal keeps the summary readable in the console.
const summary = `Math Utility Dashboard\nInput: ${x}\nRounded: ${roundedValue}\nSquare root: ${squareRoot.toFixed(2)}\nPower (x³): ${cubedValue.toFixed(2)}\nRandom integer (10–50): ${randomValue}`;
console.log(summary);