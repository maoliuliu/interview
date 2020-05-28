const query = () => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      if (Math.random() < 0.2) {
        console.log('success')
        res({
          state: 1,
          data: 'xxx'
        })
      } else {
        console.log('faild')
        rej({
          state: 0,
          data: null
        })
      }
    })
  })
}

const _query = (n, x) => {
  let times = 0
  let timerId
  const fn =  () => {
    times += 1
    clearTimeout(timerId)
    if (times >= n) return
    return query()
      .then(response => {
        return response
      })
      .catch(e => {
        timerId = setTimeout(fn, x)
        return { 
          state: 0,
          data: null
        }
      })
  }
  return fn
}

const test = _query(10, 500)
const ret = test()
console.log(ret)
