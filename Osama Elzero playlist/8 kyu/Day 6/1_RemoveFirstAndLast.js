function removeChar(str) {
    let result = ''
    for (var i = 1; i < str.length - 1; i++) {
        result += str[i]
    }
    return
};


console.log(removeChar('eloquent'))
console.log(removeChar('country'))
console.log(removeChar('person'))
console.log(removeChar('ooopsss'))
console.log(removeChar('ooopsss'))