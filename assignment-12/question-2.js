// Normalize the product title before displaying it to customers.
const productName = " wireless headphones PRO ";
const trimmedName = productName.trim().toLowerCase();
const titleCasedName = trimmedName
  .split(" ")
  .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
  .join(" ");
const cleanedTitle = titleCasedName.replace(/\bpro\b/i, "Pro Edition");

console.log(`Clean product title: ${cleanedTitle}`);
console.log(`Title length: ${cleanedTitle.length} characters`);