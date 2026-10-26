// Sample values; update them to check different eligibility outcomes.
const age = 19;
const isCitizen = true;

// The brief overlaps its first two rules at age 18-20. Use 21+ for all
// services so the vote-only category remains reachable and unambiguous.
if (isCitizen) {
  if (age >= 21 && age >= 18) {
    console.log("Eligible for all services.");
  } else if (age >= 18 && age <= 20) {
    console.log("Eligible to vote only.");
  } else {
    console.log("Not eligible yet.");
  }
} else if (!isCitizen && age >= 18) {
  console.log("Only age criteria met.");
} else {
  console.log("Not eligible yet.");
}