// Starting salary and annual increase rate for the projection.
const currentSalary = 50000;
const annualIncrementRate = 8;
const projectionYears = 5;
let projectedSalary = currentSalary;
const salaryProjection = [];

// Apply the annual increment to the previous year's projected salary.
for (let year = 1; year <= projectionYears; year += 1) {
  projectedSalary += projectedSalary * (annualIncrementRate / 100);
  projectedSalary = Math.round(projectedSalary * 100) / 100;
  salaryProjection.push({
    Year: year,
    Salary: `₹${projectedSalary.toFixed(2)}`
  });
}

console.table(salaryProjection);