class Node {
  constructor(element) {
    this.element = element
    this.next = null
  }
}

class singleLinkedList {
  constructor() {
    this.head = new Node("head")
    this.length = 0
  }

  addFirst(newItem) {
    let node = new Node(newItem)
    node.next = this.getFirst()
    this.head.next = node

    this.length += 1
  }

  addLast(newItem) {
    let node = new Node(newItem)
    let lastNode = this.getLast()
    lastNode.next = node

    this.length += 1
  }

  addAfter(exsitingPosition, newItem) {
    let node = new Node(newItem)
    let [, currentNode, nextNode] = this.getItem(exsitingPosition, true)
    if (currentNode) {
      node.next = nextNode
      currentNode.next = node
      this.length += 1
    }
  }

  getFirst() {
    return this.head.next
  }

  getLast() {
    let currentNode = this.head
    while (currentNode.next) {
      currentNode = currentNode.next
    }
    // currentNode is the last element now
    return currentNode
  }

  // remove item by it's element
  remove(exsitingItem) {
    let currentNode = this.head,
        previousNode = null

    for (var index = 0; index < this.length; index++) {
      previousNode = currentNode
      currentNode = currentNode.next

      if (currentNode.element == exsitingItem) {
        previousNode.next = currentNode.next
        return currentNode.element
      }
    }
    return null
  }

  // remove item by position
  removeAt(exsitingPosition) {
    let [previousNode, currentNode, nextNode] = this.getItem(exsitingPosition, true)
    if (currentNode) {
      this.length -= 1
      previousNode.next = nextNode
      return currentNode.element
    } else {
      return null
    }
  }

  // get item by position
  getItem(exsitingPosition, showRelatedNodes = false) {
    let previousNode = null,
        nextNode = null,
        currentNode = this.head
    if (exsitingPosition >= 0 && exsitingPosition <= this.length) {
      for (let index = 0; index < this.length; index++) {
        previousNode = currentNode
        currentNode = currentNode.next
        nextNode = previousNode.next.next

        if (index == exsitingPosition) {
          break
        }
      }
      return !showRelatedNodes ? currentNode : [previousNode, currentNode, nextNode]
    } else {
      return null
    }
  }

  isEmpty() {
    return this.length == 0 ? true : false
  }

  size() {
    return this.length
  }

  // print a list of nodes & return it
  display() {
    let currentNode = this.head,
        nodeList = []
    for (let index = 0; index < this.length; index++) {
      nodeList.push(currentNode.next)
      currentNode = currentNode.next
    }
    console.log(nodeList)
    return nodeList
  }

}

/* reference
** https://juejin.im/entry/59cb70995188256aa423b680
** 学习JavaScript数据结构与算法（第2版） - Loiane Groner
**/
