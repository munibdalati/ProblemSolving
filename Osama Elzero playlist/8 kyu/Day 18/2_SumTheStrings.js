function sumStr(a, b) {
    if (a === "") {
        a = 0
    }
    if (b === "") {
        b = 0
    }
    return (parseInt(a) + parseInt(b)).toString()
}
console.log(sumStr("34", "5"));
console.log(sumStr("4", "5"))
