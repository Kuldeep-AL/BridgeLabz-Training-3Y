"use strict";

function outer() {
  console.log(count);
  var count = 5;

  function inner() {
    console.log(count);
    var count = 10;
  }

  inner();
}

console.log("Function declaration version:");
outer();

function outerWithArrow() {
  console.log(count);
  var count = 5;

  const inner = () => {
    console.log(count);
    var count = 10;
  };

  inner();
}

console.log("Arrow inner-function version:");
outerWithArrow();

// Output for each version is undefined, then 10: outer's var is hoisted as undefined,
// and inner's separate var declaration shadows it in the inner execution context.
// The arrow has its own function scope for var; its lexical this/arguments behavior is unrelated here.
// Debug call stack: outer (or outerWithArrow) -> inner; step out of inner to return to the outer frame.
