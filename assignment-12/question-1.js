// The global bonus is shared, but the employment status stays local to each call.
const bonus = 5000;

function calculateSalary(isPermanent) {
  const salary = 40000;
  let totalSalary = salary;

  // Add the global bonus only when this call's local status is permanent.
  if (isPermanent) {
    totalSalary += bonus;
  }

  console.log(`Permanent: ${isPermanent} | Total salary: ₹${totalSalary}`);
}

calculateSalary(true);
calculateSalary(false);
console.log(`Global bonus remains unchanged: ₹${bonus}`);