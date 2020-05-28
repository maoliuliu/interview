const binarySearch = (arr = [], target) => {
  const len = arr.length
  let left = 0,
      right = len - 1
  while (left < right) {
    const midIndex = left + parseInt((right - left) / 2)
    const midVal = arr[midIndex]
      if (midVal < target) {
        left = midIndex + 1
      } else {
        right = midIndex
      }
  }
  return arr[left] === target
    ? left
    : -1
}
console.log('binarySearch', binarySearch([1, 2], 2))
