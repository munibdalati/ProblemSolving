function flipNumber(n) {
    let arr = n.split('')
    let result = arr[arr.length - 1]
    let reversed = []
    for (let i = 0; i < arr.length; i++) {

        reversed = arr.reverse(); // 210
        result.push(reversed[0]); //2
        reversed.shift([i]);
    }
    return result;

}

console.log(flipNumber("012"));
console.log(flipNumber("012345"));
console.log(flipNumber("0123456789"))