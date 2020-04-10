export default function fdate(num: number) {
  const date = parseInt('' + num / 1000)
  const d = parseInt('' + date / (24 * 60 * 60))
  let h: string | number = parseInt('' + ((date / (60 * 60)) % 24))
  let m: string | number = parseInt('' + ((date / 60) % 60))
  let s: string | number = parseInt('' + (date % 60))
  h = addZero(h)
  m = addZero(m)
  s = addZero(s)
  return `${d} 天 ${h} 时 ${m} 分 ${s} 秒`
}

function addZero(i: number | string) {
  if (i < 10) {
    i = '0' + i
  }
  return i
}
