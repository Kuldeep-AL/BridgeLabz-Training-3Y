// Generate eight random integer scores, including both 30 and 100 as bounds.
const scores = Array.from({ length: 8 }, () => Math.floor(Math.random() * 71) + 30);
const adjustedScores = scores.map((score) => score);
const passingScores = adjustedScores.filter((score) => score >= 50);
const totalScore = adjustedScores.reduce((total, score) => total + score, 0);
const averageScore = totalScore / adjustedScores.length;
const highestScore = Math.max(...adjustedScores);
const lowestScore = Math.min(...adjustedScores);

console.log(`Scores: ${adjustedScores.join(", ")}`);
console.log(`Highest score: ${highestScore}`);
console.log(`Lowest score: ${lowestScore}`);
console.log(`Average score: ${averageScore.toFixed(2)}`);
console.log(`Students passed (50+): ${passingScores.length} of ${adjustedScores.length}`);