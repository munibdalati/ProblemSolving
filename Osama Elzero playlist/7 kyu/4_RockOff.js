function solve(a, b) {
    let AliceScore = 0
    let BobScore = 0
    for (let i = 0; i <= 2; i++) {
        if (a[i] > b[i]) {
            AliceScore += 1
        }
        else if (a[i] < b[i]) {
            BobScore += 1
        }
    }
    if (AliceScore > BobScore) {
        return `${AliceScore}, ${BobScore}: Alice made "Kurt" proud!`
    }
    else if (BobScore > AliceScore) {
        return `${AliceScore}, ${BobScore}: Bob made "Jeff" proud!`
    }
    else {
        return `${AliceScore}, ${BobScore}: that looks like a "draw"! Rock on!`
    }
}





console.log(solve([47, 7, 2], [47, 7, 2]))
console.log(solve([47, 67, 22], [26, 47, 12]))
console.log(solve([25, 50, 22], [34, 49, 50]))
