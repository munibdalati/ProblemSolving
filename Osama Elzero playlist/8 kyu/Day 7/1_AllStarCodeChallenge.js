function strCount(str, letter) {
    let counter = 0
    for (var i = 0; i < str.length; i++) {
        if (str[i] === letter) {
            counter += 1
        }
    }
    return counter
}


console.log(strCount('Hello', 'o'))
console.log(strCount('Hello', 'l'))
console.log(strCount('', 'z'))