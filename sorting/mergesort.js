function mergeSort(list, combiner) {
  if (list.length <= 1) return list

  let pivotIndex = Math.floor(list.length / 2)
  let left = list.splice(0, pivotIndex)
  let right = list

  let leftBranch = mergeSort(left, combiner)
  let rightBranch = mergeSort(right, combiner)

  return combiner(leftBranch, rightBranch)
}

function combiner(left, right) {
  let leftPointer = 0
  let rightPointer = 0
  let result = []
  let length = left.length + right.length

  while (!checkOutOfRange(left, leftPointer) && !checkOutOfRange(right, rightPointer)) {
    if (left[leftPointer] <= right[rightPointer]) {
      result.push(left[leftPointer])
      leftPointer ++
    } else {
      result.push(right[rightPointer])
      rightPointer ++
    }
  }

  return result.concat(left.slice(leftPointer)).concat(right.slice(rightPointer))
}

function checkOutOfRange(array, index) {
  return index >= array.length ? true : false
}

/*
  reference: https://hackernoon.com/programming-with-js-merge-sort-deb677b777c0
**/
