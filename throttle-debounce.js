// 防抖
const throttle = (fn, time) => {
  let timer = null
  let isFirst = true
  return (...args) => {
    if (isFirst) {
      fn(...args)
      isFirst = false
      return
    }
    if (timer) return
    timer = setTimeout(() => {
      clearTimeout(timer)
      timer = null
      fn(...args)
    }, time)
  }
}

// 节流
const debounce = (fn, time) => {
  let timer = null
  return (...args) => {
    if (timer) clearTimeout(timer)
    timer = setTimeout(() => {
      fn(...args)
    }, time)
  }
}