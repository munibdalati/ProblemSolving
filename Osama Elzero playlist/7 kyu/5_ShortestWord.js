function findShort(s) {
    let arr = s.split(" ")
    let shortest = arr[0]
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].length < shortest.length) {
            shortest = arr[i]
        }
    }
    return shortest.length
}
console.log(findShort("bitcoin take over the world maybe who knows perhaps"));
console.log(findShort("turns out random test cases are easier than writing out basic ones"));
console.log(findShort("Let's travel abroad shall we"));