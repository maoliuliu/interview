/**
 * 旋转数组 [0, 3, 1, 2, 4, 5]  k = 2
 * 结果 [1, 2, 4, 5, 0, 3]
 */

const _reverse = (arr = [], start = 0, end = arr.length - 1) => {
  let temp
  while (start < end) {
    temp = arr[start]
    arr[start] = arr[end]
    arr[end] = temp
    start++
    end--
  }
  return arr
}

const rotateArr = (arr = [], target = 0) => {
  const len = arr.length
  if (len <= target) return arr
  // 利用 splice
  // const spliceRet = arr.splice(0, target)
  // arr.splice(arr.length, 0, ...spliceRet)
  // return arr

  // 暴力法， 遍历 target 次， 每次反转一个元素
  // const len = arr.length
  // let temp
  // if (len <= target || target === 0) return arr
  // for (let i = 0; i < target; i++) {
  //   for (let j = 0; j < len - 1; j++) {
  //     temp = arr[j]
  //     arr[j] = arr[j + 1]
  //     arr[j + 1] = temp
  //   }
  // }
  // return arr

  // 利用反转，
  // 先反转所有元素 -- 反转前 target 个元素 -- 反转后 len - target 个元素
  _reverse(arr, 0, len - 1)
  _reverse(arr, 0, len - 1 - target)
  _reverse(arr, len - target, len - 1)
  return arr
}


console.log(rotateArr([0, 3, 1, 2, 4, 5], 2))

/**
 * 一个递增的有序数组经过旋转以后变成一个旋转数组，求旋转数组中的最小值
 * [3, 4, 5, 0, 1, 2] --> 0
 */
