
/**
 * add(1)(2) = 3
 * add(1, 2, 3, 4) -> add(1)(2)(3)(4)()
 */

const add = (...args) => {
  return args.reduce((total, current) => {
    return total += current
  } , 0)
}

const curry = (fn, ...args) => {
  const argsArr = args
  const retFn = (...args) => {
    if (args.length === 0) {
      return fn(...argsArr)
    } else {
      argsArr.push(...args)
      return retFn
    }
  }
  return retFn
}

const addCurry = curry(add)

console.log(add(1, 2, 3, 4))
console.log(addCurry(1, 2)(3)(4)())