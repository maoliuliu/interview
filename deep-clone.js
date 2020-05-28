const obj = {
  abc_cs: 'a',
  bw_sdfw: {
    c_aaq: 'c'
  },
  d_aqe: [
    {
      e_asd: 'asdf'
    },
    {
      a_b: 'asdf'
    }
  ]
}
const isObject = obj => Object.prototype.toString.call(obj) === '[object Object]'

const isArray = arr => Object.prototype.toString.call(arr) === '[object Array]'

const toCamel = str => str.replace(/_\w/g, word => word.split('_').pop().toUpperCase())

const deepClone = (obj = {}) => {
  const ret = {}
  const keys = Object.keys(obj)
  const len = keys.length
  for (let i = 0; i < len; i++) {
    const key = keys[i]
    const camelKey = toCamel(key)
    if (isObject(obj[key])) {
      ret[camelKey] = deepClone(obj[key])
    } else if (isArray(obj[key])) {
      const copyObj = deepClone(obj[key])
      console.log(copyObj, 'copyObj')
      if (ret[camelKey]) {
        ret[camelKey].pushcopyObj()
      } else {
        ret[camelKey] = [copyObj]
      }
    } else {
      ret[camelKey] = obj[key]
    }
  }
  return ret
}

console.log(deepClone(obj))

