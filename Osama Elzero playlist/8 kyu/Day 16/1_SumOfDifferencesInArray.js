function sumOfDifferences(arr) {
  arr.sort((a, b) => b - a);
  let diff = 0
  if (arr.length === 1 || 0) { return 0 }
  else {
    for (var i = 0; i < arr.length-1; i++) {
      diff += (arr[i] - arr[i + 1]);
    }
    return diff;
  }
}
console.log(sumOfDifferences([1, 2, 10]));
console.log(sumOfDifferences([-3, -2, -1]));
console.log(sumOfDifferences([1]));