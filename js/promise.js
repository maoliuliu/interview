const PENDING = 'pending'
const FULFILLED = 'fulfilled'
const REGECT = 'reject'
const isFn = fn => typeof fn === 'function'
class MyPromise {
  _resolve(val) {
    setTimeout(() => {
      if(this.status !== PENDING) return
      const fulfilledRes = res => {
        this.val = res
        this.status = FULFILLED
        let cb
        while(cb = this.onFulFilledStack.shift()) {
          cb(res)
        }
      }
      const rejected = err => {
        this.val = err
        this.status = REGECT
        let cb
        while(cb = this.onRejectedStack.shift()) {
          cb(err)
        }
      }
      if (val instanceof MyPromise) {
        val.then(res => {
          fulfilledRes(res)
        }).catch(err => {
          rejected(err)
        })
      } else {
        fulfilledRes(val)
      }
    })
  }
  _reject(reason) {
    if(this.status !== PENDING) return
    this.status = REGECT
    this.val = reason
    let cb
    while(cb = this.onRejectedStack.shift()) {
      cb(reason)
    }
  }
  constructor(executor) {
    if (!isFn(executor)) {
      throw Error ('xxxx')
    }
    this.status = PENDING
    this.val = undefined
    this.onFulFilledStack = []
    this.onRejectedStack = []
    try {
      executor(this._resolve.bind(this), this._reject.bind(this))
    } catch(e) {
      console.log('catch', e)
      this._reject(e)
    }
  }
  then(onFulfilled, onRejected) {
    return new MyPromise((resolve, reject) => {
      const fulfilled = val => {
        if (!isFn(onFulfilled)) {
          resolve(val)
        } else {
          const ret = onFulfilled(val)
          if (ret instanceof MyPromise) {
            ret.then(resolve, reject)
          } else {
            resolve(ret)
          }
        }
      }
      const rejected = val => {
        if (!isFn(onRejected)) {
          reject(val)
        } else {
          const ret = onRejected(val)
          if (ret instanceof MyPromise) {
            ret.then(resolve, reject)
          } else {
            reject(ret)
          }
        }
      }
      switch (this.status) {
        case PENDING:
          this.onFulFilledStack.push(fulfilled)
          this.onRejectedStack.push(rejected)
          break
        case FULFILLED:
          fulfilled(this.val)
          break
        case REGECT:
          rejected(this.val)
          break
      }
    })
  }
  static resolve (val) {
    if (val instanceof MyPromise) return val
    return new MyPromise((res, rej) => res(val))
  }
  static all (promiseList = []) {
    const ret = []
    let count = 0
    return new MyPromise((resolve, reject) => {
      for (let i = 0, len = promiseList.length; i < len; i++) {
        this.resolve(promiseList[i])
          .then((res) => {
            count++
            ret[i] = res
            if (count === promiseList.length) {
              resolve(ret)
            }
          }).catch(e => {
            reject(e)
          }) 
      }
    })
  }
  static race (promiseList = []) {
    return new MyPromise((resolve, reject) => {
      for (let i = 0, len = promiseList.length; i < len; i++) {
        this.resolve(promiseList)
          .then(res => resolve(res))
          .catch(e => reject(e))
      }
    })
  }
  finally (cb) {
    return this.then(res => {
      MyPromise.resolve(cb())
        .then(() => res)
    }, err => {
      MyPromise.resolve(cb())
        .then(() => { throw err })
    })
  }
}

const p1 = new MyPromise(function(resolve, reject) {
  // setTimeout(() => {
  //   resolve(111)
  // })
  resolve(111)
})
p1.then((val) => {
  console.log(val)
  return 2222
}).then(val => {
  console.log('p2', val)
})
