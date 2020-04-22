/**@throttle 节流函数 */
export default function throttle(fn: any, delay: number) {
  let prev = Date.now()
  return function() {
    let context = this
    let arg = arguments
    let now = Date.now()
    if (now - prev >= delay) {
      fn.apply(context, arg)
      prev = Date.now()
    }
  }
}
