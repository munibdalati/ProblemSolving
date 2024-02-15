function testit(s) {
    let arr = s.split(" ");
    if (arr[0] != "") {
        for (let i = 0; i < arr.length; i++) {
            arr[i] = arr[i].slice(0, -1)+ arr[i][arr[i].length - 1].toUpperCase();
        }
        return arr.join(" ");
    }
    else return "";
}


console.log(testit(""))
console.log(testit("a"))
console.log(testit("b"))
console.log(testit("a a"))
console.log(testit("a b"))
console.log(testit("a b c"))
console.log(testit("abc abc abc"))
console.log(testit("abmxs abcb abcd"))