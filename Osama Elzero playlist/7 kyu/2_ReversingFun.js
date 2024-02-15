function flipNumber(n) {
    let arr = n.split('')
    let reversed = []
    let result = []
    for (let i = 0; i < n.length; i++) {
        reversed = arr.reverse();
        result.push(reversed[0]); 
        reversed.shift([0]);
    }
    return result.join('');
}

console.log(flipNumber("012"));
console.log(flipNumber("012345"));
console.log(flipNumber("0123456789"))