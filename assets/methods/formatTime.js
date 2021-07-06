/**
 * Formats a time as mm/dd/yyyy hh:mm.
 * @param {Date} time The time to format.
 * @returns The formatted time.
 */
export default function (time) {
  return `${time.getMonth() + 1}/${time.getDate()}/${time.getFullYear()} ${time.getHours()}:${time.getMinutes()}`
}
