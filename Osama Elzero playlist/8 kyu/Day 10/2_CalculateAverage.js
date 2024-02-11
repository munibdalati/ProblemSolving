function findAverage(array) {
  if (array.length === 0 ){
    return 0
  }
  let sum =0
  for (var i = 0; i < array.length; i++) {
    sum += array[i]
  }
  return sum / array.length
}

console.log(findAverage([1, 1, 1]))
console.log(findAverage([1, 2, 3]))
console.log(findAverage([1, 2, 3, 4]))
