function multiTable(number) {
  let str = ""
  for (let i = 1; i <= 10; i++) {
    str = str + `${i} * ${number} = ${i * number}\n`
  }
  return str.substring(0, str.length - 1);
}
console.log(multiTable(5));
console.log(multiTable(1));
