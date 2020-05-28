/**
 * 外观数列
 * 1
 * 11
 * 21
 * 1211
 * 111221
 * 312211
 */

const seriesArr = (n = 1) => {
  if (n === 1) return '1'
  const str = seriesArr(n - 1)
  const len = str.length
  let retStr = ''
  let count = 1
  for (let i = 1; i < len; i++) {
    if (str.charAt(i) === str.charAt(i - 1)) {
      count += 1
    } else {
      retStr += `${count}${str.charAt(i - 1)}`
      count = 1
    }
  }
  return `${retStr}${count}${str.charAt(len - 1)}`
}
