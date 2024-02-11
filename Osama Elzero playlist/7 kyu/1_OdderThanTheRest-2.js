function oddest(array1) {
    let array2 = []
    for (let i = 0; i < array1.length; i++) {
        array2.push(Math.abs(array1[i]))
    }
    array2.sort((a, b) => a - b);
    for (let i = array2.length - 1; i>=0; i--) {
        if (array2[i] % 2 !== 0) {
            return array2[i]
        }
    }
    return array2[array2.length - 1]
}
console.log(oddest([-1, 0, 2]));
console.log(oddest([1, 3]));
console.log(oddest([1, 5]));
console.log(oddest([1, 2, 3, 4, 5, 6]));
console.log(oddest([-5,3]));


