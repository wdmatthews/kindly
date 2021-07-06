/**
 * Returns a message corresponding to a student's grade.
 * @param {number} grade The student's grade.
 * @returns A message corresponding to the grade.
 */
export default function (grade) {
  if (Math.fround(grade) === 80 || grade > 80) { return 'You are doing awesome!' }
  if (Math.fround(grade) === 70 || grade > 70) { return 'You are so close, keep it up!' }
  return 'I believe in you, keep trying!'
}
