"use strict";

const employees = [
  { name: "Amit", salary: "45000", years: "5" },
  { name: "Sara", salary: "38000", years: "2" },
  { name: "Kiran", salary: "52000", years: "7" }
];

for (const employee of employees) {
  try {
    if (!employee || employee.name === undefined || employee.salary === undefined || employee.years === undefined) {
      throw new TypeError("Employee is missing a required property.");
    }

    const salary = Number(employee.salary);
    const years = Number(employee.years);

    if (!Number.isFinite(salary) || !Number.isFinite(years)) {
      throw new TypeError("Salary and years must be valid numbers.");
    }

    const bonusRate = years > 3 ? 0.1 : 0.05;
    const bonus = salary * bonusRate;
    const totalCompensation = salary + bonus;

    console.log(
      `${employee.name}: salary=₹${salary.toFixed(2)}, experience=${years} years, ` +
      `bonus=${(bonusRate * 100).toFixed(0)}% (₹${bonus.toFixed(2)}), total=₹${totalCompensation.toFixed(2)}`
    );
  } catch (error) {
    console.log(`Employee processing failed: ${error.name}: ${error.message}`);
  }
}
