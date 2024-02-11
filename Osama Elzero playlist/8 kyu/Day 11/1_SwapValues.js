function swapValues() {
    var args = Array.prototype.slice.call(arguments);
    var temp = args[0][0]
    args[0][0] = args[0][1]
    args[0][1] = temp
    return args
}
console.log(swapValues([1,2]))
