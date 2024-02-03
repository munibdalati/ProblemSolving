function countSheeps(sheep) {
  let counter = 0;
  for (var i = 0; i < sheep.length; i++) {
    if (sheep[i] === true) {
      counter += 1;
    }
  }
  return counter;
}
console.log(countSheeps([]))
console.log(countSheeps([undefined]))
console.log(countSheeps([null]))
console.log(countSheeps([false]))
console.log(countSheeps([true]))
console.log(countSheeps([undefined, null, false, true]))
console.log(countSheeps([undefined, null, false, true, true, false, null, undefined]))
console.log(countSheeps([true, true, true, false, true, true, true, true, true, false, true, false, true, false, false, true, true, true, true, true, false, false, true, true]))

