// method 1
function simpleMultiplication1(number) {
  let result;
  if (number % 2 === 0) {
    result = number * 8;
  } else {
    result = number * 9;
  }
  return result;
}
console.log(simpleMultiplication1(5)) ;

// method 2
function simpleMultiplication2(number) {
  return (number % 2 === 0 ? number * 8 : number * 9)
}
console.log(simpleMultiplication2(5));