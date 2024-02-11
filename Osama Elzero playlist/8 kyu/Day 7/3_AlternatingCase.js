function toAlternatingCase(str) {
    let result = ""
    for (var i = 0; i < str.length; i++) {
        if (str[i] === str[i].toUpperCase()) {
            result += str[i].toLowerCase()
        }
        else {
            result += str[i].toUpperCase()
        }
    }
    return result
}
console.log(toAlternatingCase("hello world"))
console.log(toAlternatingCase("HELLO WORLD"))
console.log(toAlternatingCase("hello WORLD"))
console.log(toAlternatingCase("HeLLo WoRLD"))
console.log(toAlternatingCase("12345"))
console.log(toAlternatingCase("1a2b3c4d5e"))
console.log(toAlternatingCase("String.prototype.toAlternatingCase"))
console.log(toAlternatingCase("Hello World"))