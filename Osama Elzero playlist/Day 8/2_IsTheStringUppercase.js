String.prototype.isUpperCase = function() {
  for (var i = 0; i < this.length; i++) {
    if (this[i].match(/[a-z]/i) && this[i] === this[i].toLowerCase())
      return false
  }
  return true
}

console.log('hello I AM DONALD'.isUpperCase())
console.log('HELLO I AM DONALD'.isUpperCase())
console.log('ACSKLDFJSgSKLDFJSKLDFJ'.isUpperCase())
console.log('ACSKLDFJSGSKLDFJSKLDFJ'.isUpperCase())
