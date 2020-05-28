const arr = [4, 2, 4, 18, 29, 1, 0, 3]
/**
 * 从前往后把大的值往前移动，每趟下来，当前序列最大的值都在后面。
 */
const bubbleSort = (arr = []) => {
  for (let i = 0, len = arr.length; i < len; i++) {
    let flag = false
    for (let j = 0; j < len - i; j++) {
      if (arr[j] > arr[j + 1]) {
        flag = true
        const temp = arr[j]
        arr[j] = arr[j + 1]
        arr[j + 1] = temp
      }
    }
    if (!flag) break
  }
  return arr
}
console.log('bubbleSort', bubbleSort([0, 2, 1, 5, 4, 3]))

/**
 * 选择排序
 * 从前往后找到当前位置上最小的元素，并把他放在该位置上
 */
const selectSort = (arr = []) => {
  const len = arr.length
  if (len <= 1) return arr
  for (let i = 0; i < len; i++) {
    let mixIndex = i
    for (let j = i + 1; j < len; j++) {
      if (arr[mixIndex] > arr[j]) {
        mixIndex = j
      }
    }
    [arr[i], arr[mixIndex]] = [arr[mixIndex], arr[i]]
  }
  return arr
}
// console.log('selectSort', selectSort([...arr]))

/**
 * 从前往后把当前元素插入到前面有序的区间里
 * 开始时有序区间默认只包含第一个元素
 */
const insertSort = (arr = []) => {
  const len = arr.length
  for (let i = 1; i < len; i++) {
    for(j = i; j > 0; j--) {
      if (arr[j] >= arr[j - 1]) break
      [arr[j - 1], arr[j]] = [arr[j], arr[j - 1]]
    }
  }
  return arr
}
console.log('insertSort', insertSort([...arr]))

const quickSort = (arr = []) => {
  const len = arr.length
  if (len < 2) return arr
  const leftArr = []
  const rightArr = []
  for (let i = 1; i < len; i++) {
    if (arr[i] >= arr[0]) {
      rightArr.push(arr[i])
    } else {
      leftArr.push(arr[i])
    }
  }
  return quickSort(leftArr).concat(arr[0], quickSort(rightArr))
}
console.log('quickSort', quickSort([...arr]))

