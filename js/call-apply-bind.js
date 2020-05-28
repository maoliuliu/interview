Function.prototype.$call = function(context = window, ...args) {
  const symbol = Symbol()
  context[symbol] = this
  const ret = context[symbol](...args)
  Reflect.deleteProperty(context, symbol)
  return ret
}

Function.prototype.$apply = function(context = window, args) {
  const symbol = Symbol()
  context[symbol] = this
  const ret = context[symbol](args)
  Reflect.deleteProperty(context, symbol)
  return ret
}

Function.prototype.$bind = function(context = window, ...args) {
  const _this = this
  return function(...params) {
    return _this.$apply(context, args.concat(params))
  }
}

const obj = {
  name: 'test',
  fn(...arg) {
    console.log(this.name, ...arg)
  }
}
obj.fn.$call({ name: 'ada-call' }, 'eric')
obj.fn.$apply({ name: 'ada-apply' }, ['eric', 'eric1', 'eric2'])
obj.fn.$bind({ name: 'ada-bind' }, 'eric', 'eric1')('eric2', 'eric3')
const testFn = obj.fn.$bind({ name: 'ada-bind' }, 'eric', 'eric1')('eric3', 'eric4')
