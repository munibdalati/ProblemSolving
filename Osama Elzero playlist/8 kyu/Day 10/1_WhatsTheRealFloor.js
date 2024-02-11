function getRealFloor(n) {
  let result
  if (n < 1) {
      return n
  }
  else if (n < 13) {
      return n - 1
  }
  else {
      return n - 2
  }
}
console.log(getRealFloor(1))
console.log(getRealFloor(5))
console.log(getRealFloor(15))
console.log(getRealFloor(-2))
