// Change this sample name to personalize the greeting.
const userName = "Avery";
const currentHour = new Date().getHours();

let greeting;

// Choose a greeting based on the current local hour.
if (currentHour < 12) {
  greeting = `Good Morning ${userName}!`;
} else if (currentHour <= 17) {
  greeting = `Good Afternoon ${userName}!`;
} else {
  greeting = `Good Evening ${userName}!`;
}

console.log(greeting);