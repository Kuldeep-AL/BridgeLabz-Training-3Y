// Sample cart items and category-specific discounts.
const cart = [
  { item: "Laptop", category: "electronics", price: 45000 },
  { item: "Shoes", category: "fashion", price: 2500 },
  { item: "Book", category: "education", price: 600 }
];

const cartValue = cart.reduce((total, product) => total + product.price, 0);
let discountedSubtotal = 0;

// Apply the discount for each product according to its category.
for (const product of cart) {
  let discountRate = 0;

  if (product.category === "electronics") {
    discountRate = 0.10;
  } else if (product.category === "fashion") {
    discountRate = 0.05;
  }

  discountedSubtotal += product.price * (1 - discountRate);
  console.log(`${product.item}: ₹${product.price.toFixed(2)} before category discount`);
}

// Apply the extra discount to the discounted subtotal when original cart value exceeds ₹50,000.
const extraDiscountRate = cartValue > 50000 ? 0.05 : 0;
const finalTotal = discountedSubtotal * (1 - extraDiscountRate);

console.log(`Cart value: ₹${cartValue.toFixed(2)}`);
console.log(`Extra cart discount: ${extraDiscountRate * 100}%`);
console.log(`Final total: ₹${finalTotal.toFixed(2)}`);