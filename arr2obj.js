const obj = [
  {id:1,parent:null},
  {id:2,parent:1},
  {id:3,parent:2}
]

const obj2 = {
  obj:{
      id: 1,
      parent: null,
      child: {
          id: 2,
          parent: 1,
          child: {
              id: 3,
              parent: 2
          }
      }
  }
}
const arr2obj = (arr = []) => {
  const ret = {}
  let temp = ret
  for (let i = 0, len = arr.length; i < len; i++) {
    const {
      id,
      parent
    } = arr[i] || {}
    temp.id = id
    temp.parent = parent
    temp.child = {}
    temp = temp.child
  }
  return {
    obj: ret
  }
}
console.log(JSON.stringify(arr2obj(obj)))