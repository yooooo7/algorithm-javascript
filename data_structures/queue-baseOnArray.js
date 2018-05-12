const _items = new WeakMap()

class Queue {
  constructor() {
    //private property
    _items.set(this, [])
  }

  enqueue(object) {
    _items.get(this).push(object)
  }

  dequeue() {
    return _items.get(this).shift()
  }

  front() {
    return _items.get(this)[0]
  }

  size() {
    return _items.get(this).length
  }

  isEmpty() {
    return this.size() ? false : true
  }
}
