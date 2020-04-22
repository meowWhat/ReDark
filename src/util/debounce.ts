/**
 * @debounce 防抖函数 callback:回到 delay:防抖的时延
 */
let timer: null | NodeJS.Timeout = null
export function debounce(callback: any, delay: number) {
  return function() {
    let context = this
    let arg = arguments
    if (timer !== null) {
      clearTimeout(timer)
    }
    timer = setTimeout(() => {
      callback.apply(context, arg)
    }, delay)
  }
}
