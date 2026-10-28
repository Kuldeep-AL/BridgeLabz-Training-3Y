"use strict";

function runDemo(label, source) {
  try {
    const result = Function(source)();
    console.log(`${label}: completed; returned ${String(result)}`);
  } catch (error) {
    console.log(`${label}: ${error.name}: ${error.message}`);
  }
}

// A Function constructor lets this file compare isolated sloppy and strict snippets.
runDemo(
  "Without strict mode",
  "function demo(a, a) { total = 10; delete total; return total; } return demo(5, 10);"
);
console.log(`Sloppy assignment created globalThis.total: ${globalThis.total}`);
delete globalThis.total;

runDemo(
  "Strict mode with duplicate parameters",
  '"use strict"; function demo(a, a) { return a; } return demo(5, 10);'
);
runDemo(
  "Strict mode with undeclared assignment",
  '"use strict"; total = 10;'
);
runDemo(
  "Strict mode with deleting an identifier",
  '"use strict"; let total = 10; delete total;'
);

function demo(first, second) {
  const total = first + second;
  console.log(`Correct ES6 version: first=${first}, second=${second}, total=${total}`);
}

demo(5, 10);
// Strict mode rejects duplicate parameters and deleting a local binding during parsing,
// and rejects assignments to undeclared names at runtime.
