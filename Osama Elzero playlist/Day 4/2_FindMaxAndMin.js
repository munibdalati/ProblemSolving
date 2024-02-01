var min = function (list) {
  let minVal = list[0];
  for (var i = 1; i < list.length; i++) {
      if (list[i] < minVal) {
          minVal = list[i];
      }
  }
  return minVal;
}

var max = function (list) {
  let maxVal = list[0];
  for (var i = 1; i < list.length; i++) {
      if (list[i] > maxVal) {
          maxVal = list[i];
      }
  }
  return maxVal;
}

console.log(min([-52, 56, 30, 29, -54, 0, -110]));
console.log(min([42, 54, 65, 87, 0]));
console.log(max([4, 6, 2, 1, 9, 63, -134, 566]));
console.log(max([5]));