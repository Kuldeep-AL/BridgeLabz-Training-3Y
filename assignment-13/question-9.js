"use strict";

const rawData = [
  '{"user":"Alex","age":25}',
  '{"id":2}',
  '{invalid}',
  '{"user":"Mina","age":"22"}'
];

const cleanData = [];
const auditErrors = [];

for (let index = 0; index < rawData.length; index += 1) {
  const lineNumber = index + 1;

  try {
    // Set a breakpoint here; after a parse error, execution jumps directly to catch.
    const record = JSON.parse(rawData[index]);

    if (record === null || typeof record !== "object" || !("user" in record) || !("age" in record)) {
      throw new Error("Missing required user or age key.");
    }

    const age = Number(record.age);
    if (!Number.isFinite(age)) {
      throw new Error("Age must be a valid number.");
    }

    cleanData.push({ ...record, age });
    console.log(`Line ${lineNumber}: valid record for ${record.user}, age=${age}`);
  } catch (error) {
    auditErrors.push({ line: lineNumber, type: error instanceof SyntaxError ? "Invalid JSON" : "Invalid record", message: error.message });
    console.log(`Line ${lineNumber}: ${error instanceof SyntaxError ? "Invalid JSON" : "Invalid record"} — ${error.message}`);
  }
}

const under18Users = cleanData.filter((record) => record.age < 18);

console.log("\nClean data:", cleanData);
console.log("Audit errors:", auditErrors);
console.log("Under-18 users:", under18Users);
// In the debugger, watch lineNumber and record; a thrown parse/validation error skips to catch.
