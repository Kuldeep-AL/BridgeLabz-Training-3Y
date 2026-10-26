// Sample purchase total in rupees.
const purchaseTotal = 6250;
let discountRate = 0;

if (purchaseTotal >= 10000) {
  discountRate = 0.25;
} else if (purchaseTotal >= 5000) {
  discountRate = 0.15;
} else if (purchaseTotal >= 2000) {
  discountRate = 0.05;
}

const discountAmount = Math.round(purchaseTotal * discountRate);
const finalPrice = Math.round(purchaseTotal - discountAmount);

console.log(`Original total: ₹${Math.round(purchaseTotal)}`);
console.log(`Discount: ${discountRate * 100}% (₹${discountAmount})`);
console.log(`Final price: ₹${finalPrice}`);