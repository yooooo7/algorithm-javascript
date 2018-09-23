function directInsertionSort(array) {
  list = array.slice(0)
  for (var i = 1; i < list.length; i++) {
    idx = i - 1
    temp = list[i]
    while (idx >= 0 && temp < list[idx]) {
      list[idx+1] = list[idx]
      idx -= 1
    }
    list[idx+1] = temp
  }

  return list
}

/*
  reference:
  1. http://louiszhai.github.io/2016/12/23/sort/
  2. https://www.jianshu.com/p/7e6589306a27
**/
