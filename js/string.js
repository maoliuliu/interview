// 找出字符串中只出现一次的第一个字符，如果没有返回#
// 'abcfbc' --- 'a'  'ababcc' -- '#'
const findFirstShowStr = str => {
  str = str + ''
  if(!str) return '#'
  const strArr = str.split('')
  // 通过includes判断剩余字符中是否包含当前字符
  // const ret = strArr.find((item, index) => {
  //   return !str.slice(index +1).includes(item)
  // })

  // indexOf === lastIndexOf
  for(let i = 0, length = strArr.length; i < length; i++ ) {
    const item = str[i]
    if(str.indexOf(item) === str.lastIndexOf(item)) {
      return item
    }
  }
  // return ret || '#'
}

const str = 'absda'
console.log(findFirstShowStr(str))

// 查找字符串中出现n次的某个字符，结果放在数组中，如果没有返回['#']
const findStr = (str, n) => {
  str = str + ''
  if(!str) return ['#']
  const strArr = str.split('')
  const retObj = strArr.reduce((accumulator, current) => {
    let item = accumulator[current]
    accumulator[current] = item ? ++item : 1
    return accumulator
  }, {})
  return Object.keys(retObj)
    .filter(item => retObj[item] === n)
}
// console.log(findStr(str, 3))


// 求给定字符串的全排列
function Permutation(str) {
  const result = [];
  if (str) {
    queue = str.split('')
    PermutationCore(queue, result);
  }
  result.sort();
  return [... new Set(result)];
}

function PermutationCore(queue, result, temp = "", current = "") {
  current += temp;
  if (queue.length === 0) {
    result.push(current);
    return;
  }
  for (let i = 0; i < queue.length; i++) {
    temp = queue.shift();
    PermutationCore(queue, result, temp, current);
    queue.push(temp);
  }
}
console.log(Permutation('abc'))

const fullPermutation = (str) => {
  if (str.length === 1) return [str]
  const result = []
  const firstStr = str.charAt(0)
  const restStr = str.slice(1)
  const restResult = fullPermutation(restStr)
  for(let i = 0; i < restResult.length; i++) {
    const currentPermutation = restResult[i]
    for (let j = 0; j <= currentPermutation.length; j++) {
      const currentStr = currentPermutation.slice(0, j)
      const currentRestStr = currentPermutation.slice(j)
      const newPermutation = `${currentStr}${firstStr}${currentRestStr}`
      result.push(newPermutation)
    }
  }
  return result
}

console.log(fullPermutation('abc').sort())

/**
 * 数字字符串相乘  '123' * '12' = ''5535
 */

const multiply = (leftOpe, rightOpe) => {
  let ret = 0
  const len = leftOpe.length
  for(let i = 0; i < len; i++) {
    const letNum = +leftOpe.charAt(i)
    const leftPow = len - 1 - i
    const rightLen = rightOpe.length
    for (let j = 0; j < rightLen; j++) {
      const rightNum = +rightOpe.charAt(j)
      const rightPow = rightLen - 1 - j
      const item =  letNum * rightNum * Math.pow(10, leftPow + rightPow)
      ret += item
    }
  }
  return `${ret}`
}

console.log('multiply', multiply('123456789', '9876'))

const simplifyPath = (path) => {
  const arr = path.split('/')
  const retStack = []
  for(let i = 0, len = arr.length; i < len; i++) {
    switch (arr[i]) {
      case '..':
        retStack.pop()
        break
      case '.':
      case '':
        break
      default:
        retStack.push(arr[i])
    }
  }
  return `/${retStack.join('/')}`
}

console.log('simplifyPath', simplifyPath('/a//b////c/d//././/..'))

/**
 * 无重复字符的最长字串
 */

const substringLen = (str) => {
  const len = str.length
  if (len <= 1) return len
  let substr = ''
  let maxLength = 0
  for (let i = 0; i < len; i++) {
    const currentChar = str.charAt(i)
    const _index = substr.indexOf(currentChar)
    substr += currentChar
    if (_index < 0) {
      maxLength = Math.max(maxLength, substr.length)
    } else {
      substr = substr.slice(_index + 1)
    }
  }
  return maxLength
}

console.log('substringLen1', substringLen('pawwke'))

/**
 * 求最大公共前缀 ["flower","flow","flight"] -> "fl"
 */

const longerCommonPrefix = (arr = []) => {
  const len = arr.length
  if (len === 0) return ''
  arr.sort()
  const firstStr = arr[0]
  const lastStr = arr[len - 1]
  for (i = 0, strLen = firstStr.length; i < strLen; i++) {
    if (firstStr.charAt(i) !== lastStr.charAt(i)) {
      return firstStr.substr(0, i)
    }
  }
  return firstStr
}
console.log(longerCommonPrefix(["aa/bb/ddfff", "aa/bb/dsd", "aa/bb/dwwewer"]))