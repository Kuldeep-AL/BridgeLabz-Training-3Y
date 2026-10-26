// Sample customer comment; lowercase once to make checks case-insensitive.
const feedback = "Great product! Fast delivery and amazing sound quality!";
const normalizedFeedback = feedback.toLowerCase();
const words = feedback.trim().split(/\s+/);
const containsNegativeWord = normalizedFeedback.includes("bad") || normalizedFeedback.includes("poor");

console.log(`Word count: ${words.length}`);
console.log(containsNegativeWord ? "Needs Improvement" : "Positive Feedback");