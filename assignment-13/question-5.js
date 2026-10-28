"use strict";

function runOriginalSequence() {
  console.log("Original sequence:");
  console.log(score);
  announce();
  var score = 50;

  function announce() {
    console.log("Game started");
  }

  let status = "ready";
  startGame();

  function startGame() {
    console.log(status);
  }
}

runOriginalSequence();

// `var score` is hoisted and initialized to undefined; the function declaration is callable immediately.
// `status` is in the temporal dead zone until its let declaration, but startGame runs afterward.
function runFixedSequence() {
  console.log("\nFixed sequence:");
  const score = 50;
  const status = "ready";

  function announce() {
    console.log("Game started");
  }

  function startGame() {
    console.log(status);
  }

  console.log(score);
  announce();
  startGame();
}

runFixedSequence();

function runArrowComparison() {
  const score = 50;
  const status = "ready";
  const announce = () => console.log("Game started (arrow)");
  const startGame = () => console.log("Status from arrow:", status);

  console.log("\nArrow-function version:");
  console.log(score);
  announce();
  startGame();
}

runArrowComparison();
// Function declarations are hoisted with their bodies; const arrow variables are in the TDZ until initialized.
