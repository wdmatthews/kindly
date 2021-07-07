export default function (time) {
  const month = time.getMonth() + 1
  const date = time.getDate()
  const year = time.getFullYear()
  const hours = time.getHours()
  const minutes = time.getMinutes()
  return `${month}/${date}/${year} ${hours}:${minutes < 10 ? '0' : ''}${minutes}`
}
