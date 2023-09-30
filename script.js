// 1
const string = "abaccddf";
function findNonRepeatedCharacters(str) {
  const charCount = {}; // Object to store character counts
  const nonRepeatedChars = []; // Array to store non-repeated characters

  // Count the occurrences of each character in the string
  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    charCount[char] = (charCount[char] || 0) + 1;
  }
  // Find the non-repeated characters
  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    if (charCount[char] === 1) {
      nonRepeatedChars.push(char);
    }
  }
  return nonRepeatedChars;
}

console.log(findNonRepeatedCharacters(string));

//2
let array = [-1, -2, -7, -3, -4, -5];
let max = array[0];

for (i = 0; i < array.length; i++) {
  if (array[i] > max) {
    max = array[i];
  }
}
console.log(max);

//3
let string1 = "munib";

let array1 = string1.split("");
let length = array1.length;
let array2 = [];

for (i = 0; i < length; i++) {
  array2.push(array1.pop());
}
console.log(array2);

//4
let arr = [1, 0, 0, 1, 1, 1, 0, 0];
let arr2 = [];

for (i = 0; i < arr.length; i++) {
  if (arr[i] === 0) {
    arr2.unshift(arr[i]);
  } else {
    arr2.push(arr[i]);
  }
}
console.log(arr2);

//5
let string2 = "hello";
let string3 = "helloworld";
let allLettersExist = true;

for (let i = 0; i < string2.length; i++) {
  let found = false;

  for (let j = 0; j < string3.length; j++) {
    if (string2[i] === string3[j]) {
      found = true;
      break;
    }
  }

  if (!found) {
    allLettersExist = false;
    break;
  }
}

console.log(allLettersExist);
