const jsonp = ({ url = '', data = {}, cb, dalay }) => {
  return new Promise((resolve, reject) => {
    window[cb] = (response) => {
      resolve(response)
      delete window[cb]
      script.parentNode.removeChild(script)
    }
    data[cb] = cb
    const queryStr = Object.entries(data)
      .map(([key, val]) => {
        return `${encodeURIComponent(key)}=${val}`
      }).join('&')
    const script = document.createElement('script')
    script.src = `${url}?${queryStr}`
    document.body.appendChild(script)
  })
}

const myNew = function(fn, ...args) {
  if (typeof fn !== 'function') {
    throw Error('xxx')
  }
  const obj = Object.create(fn.prototype)
  const ret = fn.call(obj, ...args)
  return typeof ret === 'object'
    ? ret || obj
    : obj
}

const fn = function (name) {
  this.name = name
}
fn.prototype.sayName = function() {
  return this.name
}
const instance = myNew(fn, 'test')
console.log(instance, instance.name, instance.sayName())



