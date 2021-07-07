export default function (assignments) {
  const assignmentCount = assignments.length
  if (assignmentCount < 2) { return 0 }
  return assignments.reduce((trend, assignment, index) => {
    if (index === 0) { return 0 }
    trend += assignment.grade - assignments[index - 1].grade
    return trend
  }, 0) / (assignmentCount - 1)
}
