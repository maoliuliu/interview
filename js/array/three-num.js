/**
 * 两数之和
 * 给定一个整数数组 nums 和一个目标值 target，请你在该数组中找出和为目标值的那 两个 整数，并返回他们的数组下标。
你可以假设每种输入只会对应一个答案。但是，你不能重复利用这个数组中同样的元素。

给定 nums = [2, 7, 11, 15], target = 9
因为 nums[0] + nums[1] = 2 + 7 = 9
所以返回 [0, 1]
 */

const twoNum = (arr, target) => {
  const len = arr.length
  /**
   * 方法一 枚举所有两数之和 
   * 时间复杂度 O(n^2)
   * 
   * 查找差值是否存在时，可以利用 map 快速查找的特性，降低时间复杂度
   */
  // for (let i = 0; i < len; i++) {
  //   for(let j = i + 1; j < len; j++) {
  //     if (arr[i] + arr[j] === target) {
  //       return [i, j]
  //     }
  //   }
  // }
  const map = {}
  for(let k = 0; k < len; k++) {
    const difVal = target - arr[k]
    if (map[difVal]) {
      return [map[difVal][0], k]
    } else {
      map[arr[k]] = [k]
    }
  }
  /**
   * 方法二 如果数组是有序对，可以利用双指针法。
   * 时间复杂度 O(n)
   * 
   * 如果输出对结果不是索引，那可以先排序，然后双指针
   * 
   */
}
console.log('twoNum', twoNum([3, 2, 4], 6))

/**
 * 三数之和
 * 给你一个包含 n 个整数的数组 nums，判断 nums 中是否存在三个元素 a，b，c ，使  得 a + b + c = 0 ？请你找出所有满足条件且不重复的三元组。
  注意：答案中不可以包含重复的三元组
  nums = [-1, 0, 1, 2, -1, -4]
  满足要求的三元组集合为：
  [
    [-1, 0, 1],
    [-1, -1, 2]
  ]
  
  先对数组进行排序
  遍历数组，选取当前元素作为基准，利用双指针法确定另外两个元素的位置
  如果基准元素相同则过滤掉，防止结果中出现重复项
  若sum === 0 把找到的三个元素放进结果数组中，并且把左右指针分别和下一次的位置比较是否重复，若重复则跳过。
  sum > 0 right--
  sum < 0 left++
 */
const threeNum = (arr = []) => {
  const len = arr.length
  if (len < 3) return []
  const ret = []
  arr.sort((a, b) => a - b)
  for (let i = 0 ; i < len; i++) {
    if (arr[i] > 0) return ret
    let left = i + 1
    let right = len - 1
    if (i > 0 && arr[i] === arr[i - 1]) {
      continue
    }
    while (left < right) {
      const sum = arr[i] + arr[left] + arr[right]
      if (sum === 0) {
        ret.push([arr[i], arr[left], arr[right]])
        while (left < right && arr[left] === arr[left + 1]) {
          left += 1
        }
        while (left < right && arr[right] === arr[right - 1]) {
          right -= 1
        }
        left += 1
        right -= 1
      } else if (sum > 0) {
        right -= 1
      } else {
        left += 1
      }
    }
  }
  return ret
}
console.log('threeNum', threeNum([-4,-2,-2,-2,0,1,2,2,2,3,3,4,4,6,6]))