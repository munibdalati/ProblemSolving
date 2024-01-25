// function isDivisible(n, x, y) {
//   if (n % x === 0 && n % y === 0) {
//     return true;
//   } else {
//     return false;
//   }
// }

// method 2 - 24/1/2024

function isDivisible(n, x, y) {
  return (n % x == 0 && n % y == 0)
}

console.log(isDivisible(3, 3, 4));
console.log(isDivisible(12, 3, 4));
console.log(isDivisible(8, 3, 4));
console.log(isDivisible(48, 3, 4));
