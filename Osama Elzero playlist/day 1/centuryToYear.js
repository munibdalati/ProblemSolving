// // method 1
// function century(year) {
// let century =Math.ceil(year/100)
// return century
// }
// console.log(century(1705));
// console.log(century(1900));
// console.log(century(1601));
// console.log(century(89));

// // method 2
// function century(year) {
//   let number;
//   if (year % 100 === 0) {
//     number = year / 100;
//     return number;
//   } else {
//     number = parseInt((year / 100) + 1);
//     return number;
//   }
// }

// console.log(century(1705));
// console.log(century(1900));
// console.log(century(1601));
// console.log(century(89));

// method 3 - 24/1/2024
function century(year) {
  let century = Math.ceil(year / 100)
  return century
}

console.log(century(1705));
console.log(century(1900));
console.log(century(1601));
console.log(century(89));
console.log(century(2000));
console.log(century(20000));