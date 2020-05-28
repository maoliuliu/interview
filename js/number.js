// arr 
// 2-23 rand Math.randon() * 21 (0, 21] ==> (2, 23] ==> Math.floor
const insert = (result = [], len) => {
  const rand = Math.floor(Math.random() * 21 + 2)
  if(result.includes(rand)) {
    insert(result, len)
  } else {
    result.push(rand)
  }
  if(result.length < len) {
    insert(result, len)
  } else {
    return
  }
}
const createArr = len => {
  const arr = []
  insert(arr, len)
  return arr
}
// console.log(createArr(5))

/**
 * number reverse
 * 12345 -> 54321
 */

const numberReverse = (num) => {
  // return `${num}`.split('').reverse().join('')
  if (!num) return num
  const arrNum = `${num}`.split('')
  for(let i = 0, len = arrNum.length; i < len / 2; i++) {
    let currentVal = arrNum[i]
    let endVal = arrNum[len - 1 - i]
    arrNum[i] = endVal
    arrNum[len - 1 - i] = currentVal
  }
  return arrNum.join('')
}

console.log(numberReverse(123456))
