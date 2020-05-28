/**
 * 给定一个不重复的有序数组arr, 给定一个目标值target
 * 判断target是否在数组中
 * 若存在，则返回下标
 * 若不存在，将target插入到正确的位置并返回下标
 */

const findIndex = (arr = [], target) => {
  const len = arr.length
  for (let i = 0; i < len; i++) {
    if (arr[i] === target) return i
    if (arr[i] > target) {
      arr.splice(i, 0, target)
      return i
    }
  }
  arr.push(target)
  return len
}
const arr = [1, 4, 5, 6]
const target = 7
console.log(findIndex(arr, target), arr)

