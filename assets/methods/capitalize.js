/**
 * Capitalizes a word.
 * @param {string} data The string to capitalize.
 * @returns The capitalized word.
 */
export default function (data) {
  return data[0].toUpperCase() + data.substring(1).toLowerCase()
}
