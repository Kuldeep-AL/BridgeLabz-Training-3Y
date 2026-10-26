// Create a counter so the nested functions can access its private count.
function createCounter() {
  let count = 0;

  function logCount(action) {
    // This nested function reads count from createCounter's scope.
    function displayCount() {
      console.log(`${action}: ${count}`);
    }

    displayCount();
  }

  function increment() {
    count += 1;
    logCount("Incremented");
  }

  function decrement() {
    count -= 1;
    logCount("Decremented");
  }

  return { increment, decrement };
}

const counter = createCounter();
// These calls simulate clicks on increment and decrement controls.
counter.increment();
counter.increment();
counter.decrement();