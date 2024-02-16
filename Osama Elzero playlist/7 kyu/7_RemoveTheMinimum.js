function removeSmallest(numbers) {
    const numbersCopy = numbers.slice();
    let min = numbersCopy[0];
    for (let i = 0; i < numbersCopy.length; i++) {
        if (numbersCopy[i] < min) {
            min = numbersCopy[i];
        }
    }
    numbersCopy.splice(numbersCopy.indexOf(min), 1)
    return numbersCopy
}

console.log(removeSmallest([1, 2, 3, 4, 5]))  //[2, 3, 4, 5],
console.log(removeSmallest([5, 3, 2, 1, 4]))
console.log(removeSmallest([2, 2, 1, 2, 1]))
console.log(removeSmallest([ 215, 221, 104, 173, 199, 365, 82, 36, 360 ]))  