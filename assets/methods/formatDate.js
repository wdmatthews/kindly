export default function (time) {
  const month = time.getMonth() + 1
  const date = time.getDate()
  const year = time.getFullYear()
  return `${month}/${date}/${year}`
}
