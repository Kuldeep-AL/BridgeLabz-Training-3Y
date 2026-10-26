// Sample values representing common database field types.
const userName = "Jordan Lee";
const accountBalance = 2450.75;
const isActive = true;
const favoriteColors = ["green", "blue"];
const userProfile = { city: "Pune", memberSince: 2024 };
const middleName = null;
let referralCode;

// Handle arrays and null explicitly because typeof reports them as objects.
const entries = [
  { label: "User name", value: userName, type: typeof userName },
  { label: "Account balance", value: accountBalance, type: typeof accountBalance },
  { label: "Active account", value: isActive, type: typeof isActive },
  { label: "Favorite colors", value: favoriteColors.join(", "), type: Array.isArray(favoriteColors) ? "array" : typeof favoriteColors },
  { label: "User profile", value: JSON.stringify(userProfile), type: typeof userProfile },
  { label: "Middle name", value: middleName, type: middleName === null ? "null" : typeof middleName },
  { label: "Referral code", value: referralCode, type: typeof referralCode }
];

// Print all labels, values, and detected types in one table.
console.table(entries);