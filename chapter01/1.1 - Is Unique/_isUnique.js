
// write function that takes in a string and determine if it
// has unique characters

var isUniqueChar = function (words) {
  // brute force by looping through the words' character
  // and then taking the first loop's iteration, [i] and
  for (var i = 0; i < words.length; i++) {
    // assigning to second loop init iteration, [j]
    for (var j = i + 1; j < words.length; j++) {
      if (words[i] === words[j]) {
        // if i is equal to j return false
        return false
      }
    }
  }
  // else true
  return true;
}

const test1 = 'abcdef';
const test2 = 'aabbccddee';
const test3 = 'abcdeff';
const test4 = 'abcgze';

/* TESTS */
console.log('tests');
console.log(isUniqueChar(test1), 'true');
console.log(isUniqueChar(test2), 'false');
console.log(isUniqueChar(test3), 'false');
console.log(isUniqueChar(test4), 'true');

