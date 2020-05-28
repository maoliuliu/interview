/**
 * 反转单链表
 * 1 -> 2 -> 3 -> 4
 * 4 -> 3 -> 2 -> 1
 */

function Link (data, link) {
  this.val = data
  this.next = link || null
}
const link = {
  val: 3,
  next: {
    val: 2,
    next: {
      val: 3,
      next: {
        val: 4,
        next: null
      }
    }
  }
}
const link1 = {
  val: 9,
  next: {
    val: 2,
    next: {
      val: 3,
      next: {
        val: 8,
        next: null
      }
    }
  }
}
const reverseLink = (head) => {
  if (head === null || head.next === null) return head
  // 迭代
  // let nextLink = head.next // 取出头节点的 next
  // head.next = null         // 取消头节点和其他节点的关联
  // let temp
  // while (nextLink !== null) {
  //   temp = nextLink.next   // 存储头节点的 next.next
  //   nextLink.next = head   // 把头节点 head 和 head.next 做反转，
  //   head = nextLink        // 把head.next的部分作为之前的head跌改上面的过程
  //   nextLink = temp        // 把 存储的 next.next 作为后续的 nextlink
  // }
  // return head
  // 递归
  const newHead = reverseLink(head.next) // 递归取出之前的尾节点作为新节点的头节点
  head.next.next = head  // 反转头节点和头节点的next节点的指向
  head.next = null       // 避免循环引用，取消之前头节点和其他节点的关联
  return newHead         // 返回新的头节点
}
// console.log(JSON.stringify(reverseLink(link)))  

// 删除单链表的倒数第 K 个节点
const deleteKItem = (head, k = 1) => {
  let fast = head
  let slow = head
  while (k) {
    k -= 1
    fast = fast.next
    if (!fast) return head.next
  }
  while (fast && fast.next) {
    fast = fast.next
    slow = slow.next
  }
  slow.next = slow.next.next
  return head
}
// console.log(deleteKItem(link, 3))

/**
 * 用链接表示数字，相加的加过也用链表表示
 * eg： l1: 1 -> 2 -> 3  l2: 8 -> 2 -> 8  l1 + l2 = 9 -> 4 -> 1 -> 1
 */
const addTwoNumbers = (l1, l2) => {
  let head = {}
  let temp = head
  let flag = false
  while (l1 || l2) {
    const { val: val1 = 0 } = l1 || {} 
    const { val: val2 = 0 } = l2 || {}
    let val = val1 + val2
    flag && val++
    const node = {}
    node.val = val >= 10 ? val - 10 : val
    node.next = null
    flag = val >= 10 ? true : false
    l1 = l1 && l1.next
    l2 = l2 && l2.next
    temp.next = node
    temp = temp.next
    if (!l1 && !l2 && flag) {
      temp.next = {
        val: 1,
        next: null
      }
    } 
  }
  if (flag) {
    temp.next = {
      val: 1,
      next: null
    }
  }
  return JSON.stringify(head.next)
}

console.log('addTwoNumbers', addTwoNumbers(link, link1))