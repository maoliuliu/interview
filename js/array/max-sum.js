/**
 * 求数组的最大子序和
 * [-1, 2, 3, -4, 1, 6, -2] -> [2, 3, -4, 0, 3, 1] = 5
 */

const maxSum = (arr = []) => {
  let subSum = 0
  let maxSum = 0
  for (let i = 0, len = arr.length; i < len; i++) {
    if (subSum > 0) {
      subSum += arr[i]
    } else {
      subSum = arr[i]
    }
    maxSum = Math.max(maxSum, subSum)
  }
  return maxSum
}
console.log(maxSum([-1, 2, 3, -4, 1, 6, -2]))