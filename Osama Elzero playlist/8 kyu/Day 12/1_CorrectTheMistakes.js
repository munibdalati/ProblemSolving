function correct(string) {
    let S = string.replaceAll("5", "S").replaceAll("0", "O").replaceAll("1", "I")
    return S
}

console.log(correct("L0ND0N"));
console.log(correct("DUBL1N"));
console.log(correct("51NGAP0RE"));
console.log(correct("BUDAPE5T"));
console.log(correct("PAR15"));
