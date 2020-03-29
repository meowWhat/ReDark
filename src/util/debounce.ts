let timer: null | NodeJS.Timeout = null

export function debounce(callback: any, delay: number) {
  /* 防抖函数 */
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
