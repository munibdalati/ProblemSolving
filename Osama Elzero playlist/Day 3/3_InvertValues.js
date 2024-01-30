function invert(array) {
    for (var i = 0; i < array.length; i++) {
        array[i] *= -1;
    }
    return array ;
 }

console.log(invert([1,2,3,4,5]))
console.log(invert([1,-2,3,-4,5]))
console.log(invert([]))
console.log(invert([0]))