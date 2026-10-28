"use strict";

function showMessage() {
  // Strict mode throws ReferenceError if an assignment creates an undeclared variable.
  const greeting = "Welcome";
  console.log(greeting);
}

showMessage();

// Debug observation: add `greeting` to Watch and pause on the console.log line.
// The Call Stack shows showMessage above the script's global frame; greeting is local to showMessage.
