"use strict";

const transactions = [
  { id: 1, amount: 2000 },
  { id: 2, amount: -500 },
  { id: 3 },
  null
];

class NegativeAmountError extends Error {}
class MissingTransactionDataError extends Error {}
class NullTransactionError extends Error {}

const validTransactions = [];
const invalidTransactions = [];

for (const [index, transaction] of transactions.entries()) {
  try {
    // Set a breakpoint here to inspect index and transaction before validation.
    if (transaction === null) {
      throw new NullTransactionError("Transaction entry is null.");
    }
    if (transaction.id === undefined || transaction.amount === undefined) {
      throw new MissingTransactionDataError("Transaction must include id and amount.");
    }
    if (transaction.amount < 0) {
      throw new NegativeAmountError("Transaction amount cannot be negative.");
    }

    validTransactions.push(transaction);
    console.log(`Transaction ${transaction.id} accepted: amount=${transaction.amount}`);
  } catch (error) {
    invalidTransactions.push({
      index,
      transaction,
      category: error.name,
      message: error.message
    });
    console.log(`Transaction at index ${index} rejected [${error.name}]: ${error.message}`);
  }
}

console.log("\nValid transactions:", validTransactions);
console.log("Invalid transactions:", invalidTransactions);
console.log(`Final report: ${validTransactions.length} successful, ${invalidTransactions.length} failed`);
// While stepping, the call stack shows the script frame; each catch handles an error before the loop advances.
