// Monthly expenses by category, in rupees. Update these values as needed.
const expenses = [
  { category: "food", amount: 8500 },
  { category: "travel", amount: 3200 },
  { category: "rent", amount: 18000 },
  { category: "bills", amount: 4100 },
  { category: "leisure", amount: 2200 }
];

let totalExpenses = 0;

// Add each category to the running total.
for (const expense of expenses) {
  totalExpenses += expense.amount;
}

const categoryCount = Object.keys(expenses).length;
const averageExpense = totalExpenses / categoryCount;
const taxRate = 0.10;
let finalAmount = totalExpenses;
finalAmount += finalAmount * taxRate;

console.log(`Total expenses: ₹${totalExpenses.toFixed(2)}`);
console.log(`Average per category: ₹${averageExpense.toFixed(2)}`);
console.log(`Final amount after 10% tax: ₹${finalAmount.toFixed(2)}`);