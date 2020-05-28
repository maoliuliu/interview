class Node {
  constructor(data, left, right) {
    this.value = data
    this.left = left
    this.right = right
  }
}

/**
 * 二叉搜索数
 * 左节点 < 右节点
 */
class BST {
  constructor(node) {
    this.root = node
  }
  /**
   * 把node插入到树中
   * @param { Tree } tree 
   * @param { Node } insertNode 
   */
  insertNode(tree, insertNode) {
    if(tree.value > insertNode.value) {
      if(tree.left) {
        this.insertNode(tree.left, insertNode)
      } else {
        tree.left = insertNode
      }
    } else {
      if(tree.right) {
        this.insertNode(tree.right, insertNode)
      } else {
        tree.right = insertNode
      }
    }
    return this
  }
  /**
   * 前序遍历
   */
  preorderTraversal() {
    let currentNode = this.root
    if(!currentNode) return []
    // 递归
    // const fn = (node, arr = []) => {
    //   if(!node) return []
    //   arr.push(node.value)
    //   fn(node.left, arr)
    //   fn(node.right, arr)
    //   return arr
    // }
    // return fn(currentNode, [])

    // 遍历
    // 跟节点入栈
    // 依次出栈--压入右子树--压入左子树
    const ret = []
    const stack = [currentNode]
    while(stack.length) {
      let node = stack.pop()
      ret.push(node.value)
      if(node.right) stack.push(node.right)
      if(node.left) stack.push(node.left)
      // if(currentNode) {
      //   ret.push(currentNode.value)
      //   if(currentNode.right) stack.push(currentNode.right)
      //   currentNode = currentNode.left
      // } else {
      //   let node = stack.pop()
      //   ret.push(node.value)
      //   currentNode = node.left || node.right
      // }
    }
    return ret
  }
  /**
   * 中序遍历
   */
  inorderTraversal() {
    let currentNode = this.root
    // 递归
    // const fn = function(currentNode, arr = []) {
      // if(!currentNode) return []
      // fn(currentNode.left, arr)
      // arr.push(currentNode.value)
      // fn(currentNode.right, arr)
      // return arr
    // }
    // return fn(currentNode, [])

    // 非递归，遍历
    // 1⃣️先把根结点做为当前节点
    // 2⃣️如果当前节点存在，并将当前节点压入栈中，先遍历左子树，把左子树做为当前节点
    // 3⃣️直到当前节点为叶子结点，把栈中第一个元素出栈,并放入结果数组中
    // 4⃣️把出栈的节点的右子树做为当前节点， 重复234
    let ret = []
    let stack = []
    while(currentNode || stack.length) {
      if(currentNode) {
        stack.push(currentNode)
        currentNode = currentNode.left
      } else {
        const node = stack.pop()
        ret.push(node.value)
        currentNode = node.right
      }
    }
    return ret
  }
  // 后续遍历
  postorderTraversal() {
    let currentNode = this.root
    // 递归
    // const fn = (currentNode, arr = []) => {
    //   if(currentNode) {
    //     fn(currentNode.left, arr)
    //     fn(currentNode.right, arr)
    //     arr.push(currentNode.value)
    //   }
    //   return arr
    // }
    // return fn(currentNode, [])

    // 遍历
    // 使用缓存变量记录上次出栈的元素--防止出栈的子节点再次入栈
    // 先推入跟节点 再推入左子树 
    // 取出栈顶（即左子树）推入右子树
    const ret = []
    const stack = [currentNode]
    let tmp = null
    while(stack.length) {
      tmp = stack[stack.length - 1]
      if(tmp.left && currentNode !== tmp.left && currentNode !== tmp.right) {
        stack.push(tmp.left)
      } else if(tmp.right && tmp.right !== currentNode) {
        stack.push(tmp.right)
      } else {
        ret.push(stack.pop().value)
        currentNode = tmp
      }
    }
    return ret
  }
  insert(val) {
    const node = new Node(val, null, null)
    if(!this.root) {
      this.root = node
    } else {
      // 递归实现
      // this.insertNode(this.root, node)

      // 非递归，遍历实现
      let currentNode = this.root
      while(currentNode) {
        if(currentNode.value > node.value) {
          if(currentNode.left) {
            currentNode = currentNode.left
          } else {
            currentNode.left = node
            break
          }
        } else {
          if(currentNode.right) {
            currentNode = currentNode.right
          } else {
            currentNode.right = node
            break
          }
        }
      }
    }
    return this
  }
}

const root = new Node(5)
const bst = new BST(root)

bst.insert(3)
bst.insert(6)
// bst.insert(8)
// bst.insert(9)
const inorderArr = bst.inorderTraversal()
console.log('inorderArr', inorderArr)

const preorderArr = bst.preorderTraversal()
console.log('preorderArr', preorderArr)

const postorderArr = bst.postorderTraversal()
console.log('postorderArr', postorderArr)

/**
 * 求一个二叉树的最大深度
 */

const maxDepth = (root) => {
  if (root === null) return 0
  return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1
}

console.log(maxDepth(bst.root), 'maxDepth')

/**
 * 判断一个二叉树是否为对称的
 */

console.log(bst)
const isReverseTree = (root) => {
  if (root === null) return true
  const isMirror = (left, right) => {
    if (left === null && right === null) return true
    if (left === null || right === null) return false
    if (left.value !== right.value) return false
    return isMirror(left.left, right.right) && isMirror(left.right, right.left)
  }
  return isMirror(root.left, root.right)
}

console.log(isReverseTree(bst.root))