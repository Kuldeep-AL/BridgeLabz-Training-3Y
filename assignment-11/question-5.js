// Sample weather readings; change them to try different recommendations.
const temperature = 12;
const isRaining = false;
const windSpeed = 24;

let recommendation;

// Rain takes priority; otherwise check for hot or cold-and-windy weather.
if (isRaining) {
  recommendation = "Stay indoors with hot coffee.";
} else if (temperature > 35) {
  recommendation = "Go swimming.";
} else if (temperature < 15 && windSpeed > 20) {
  recommendation = "Too cold and windy — stay home.";
} else if ((temperature >= 15 && temperature <= 35) || (temperature < 15 && windSpeed <= 20)) {
  recommendation = "Perfect day for a walk.";
} else {
  recommendation = "Perfect day for a walk.";
}

console.log(recommendation);