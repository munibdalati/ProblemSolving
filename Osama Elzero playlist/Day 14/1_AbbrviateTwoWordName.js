function abbrevName(name) {
  let first = name[0].toUpperCase();
  let second
  for (let i = 1; i < name.length; i++) {
    if (name[i] === " ") {
      second = name[i + 1].toUpperCase()
    }
  }
  return (`${first}.${second}`)

}

console.log(abbrevName("Sam Harris"))
console.log(abbrevName("Patrick Feenan"))
console.log(abbrevName("Evan Cole"))
console.log(abbrevName("P Favuzzi"))
console.log(abbrevName("David Mendieta"))