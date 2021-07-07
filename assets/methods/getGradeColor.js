export default function (grade) {
  if (Math.fround(grade) === 80 || grade > 80) { return { name: 'success', hex: '#69F0AE' } }
  if (Math.fround(grade) === 70 || grade > 70) { return { name: 'warning', hex: '#FFD740' } }
  return { name: 'error', hex: '#E57373' }
}
