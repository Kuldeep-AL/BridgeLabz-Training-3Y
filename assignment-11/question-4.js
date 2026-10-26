// Marks are out of 100; replace these sample values with student results.
const marks = [92, 88, 79, 90, 86];
const maximumMarksPerSubject = 100;
const subjectCount = marks.length;
const hasInvalidMarks = marks.some((mark) => mark < 0 || mark > maximumMarksPerSubject);

if (subjectCount !== 5 || hasInvalidMarks) {
  console.log("Invalid marks: enter marks from 0 to 100 for all five subjects.");
} else {
  const totalMarks = marks.reduce((total, mark) => total + mark, 0);
  const average = totalMarks / subjectCount;
  const percentage = (totalMarks / (subjectCount * maximumMarksPerSubject)) * 100;
  const hasFailedSubject = marks.some((mark) => mark < 35);

  console.log(`Average marks: ${average.toFixed(2)}`);
  console.log(`Overall percentage: ${percentage.toFixed(2)}%`);

  // A failed subject takes precedence over the overall percentage.
  if (hasFailedSubject || percentage < 50) {
    console.log("Detained");
  } else if (percentage >= 85 && !hasFailedSubject) {
    console.log("Promoted with Distinction");
  } else if (percentage >= 50 && percentage < 85) {
    console.log("Promoted");
  } else {
    console.log("Detained");
  }
}