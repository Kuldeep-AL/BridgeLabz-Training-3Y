"use strict";

const apiData = ["25", "true", "false", "NaN", " ", "100px", "3.14", null, undefined];
const validNumbers = [];
const invalidNumbers = [];

for (let index = 0; index < apiData.length; index += 1) {
  const value = apiData[index];
  const numberValue = Number(value);
  const booleanValue = Boolean(value);
  const stringValue = String(value);

  // Whitespace is rejected explicitly even though Number(" ") is zero.
  const isInvalid = Number.isNaN(numberValue) || (typeof value === "string" && value.trim() === "");
  const report = { index, original: value, number: numberValue, boolean: booleanValue, string: stringValue };

  if (isInvalid) {
    invalidNumbers.push(report);
    console.log(`[INVALID] index=${index} | value=${stringValue} | Number=${numberValue} | Boolean=${booleanValue}`);
  } else {
    validNumbers.push(report);
    console.log(`[VALID]   index=${index} | value=${stringValue} | Number=${numberValue} | Boolean=${booleanValue}`);
  }
}

console.log("\nValid numeric data:", validNumbers);
console.log("Invalid numeric data:", invalidNumbers);
console.log(`Summary: ${validNumbers.length} valid, ${invalidNumbers.length} invalid`);
