"use strict";

function printPyramid(rowLimit, label) {
  console.log(`\n${label} (${rowLimit} rows):`);

  for (let row = 1; row <= rowLimit; row += 1) {
    let line = "";

    for (let column = 1; column <= row; column += 1) {
      line += column === 1 ? "*" : " *";
    }

    console.log(line);
  }
}

printPyramid(4, "Requested pattern");

// Using var produces the same synchronous output; its loop counters are function-scoped and reused.
function printPyramidWithVar(rowLimit) {
  console.log(`\nSame pattern with var (${rowLimit} rows):`);

  for (var row = 1; row <= rowLimit; row += 1) {
    var line = "";

    for (var column = 1; column <= row; column += 1) {
      line += column === 1 ? "*" : " *";
    }

    console.log(line);
  }
  console.log(`After loops, var counters are reused: row=${row}, column=${column}`);
}

printPyramidWithVar(4);
// In the debugger, step through the inner loop and watch row, column, and line; var counters remain visible afterward.

const requestedLimit = process.argv[2] === undefined ? 5 : Number(process.argv[2]);

if (!Number.isInteger(requestedLimit) || requestedLimit < 1) {
  throw new TypeError("Provide a positive integer row limit as the first command-line argument.");
}

printPyramid(requestedLimit, "User-selected pattern");
