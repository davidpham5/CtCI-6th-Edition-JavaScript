
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

var isUniqueCharacter = function(str) {
  // use an object to store the characters
  // loop through the string
  // if the character is already in the object, return false
  // if not, add the character to the object
  // return true
  let obj = {};
  for (let i = 0; i < str.length; i++) {
    // console.log(obj[str[i]], str[i]);
    if (obj[str[i]] && obj[str[i]] >= 1) {
      // if computed value of obj[str[i]] is greater than or equal to 1, that means the character is already in the object
      return false;
    } else {
      // if duplicate is found, assign obj[str[i]] to 1
      // {a: 1, b: 1, c: 1, d: 1}
      obj[str[i]] = 1;
    }
    console.log(obj)
  }
  return true;
}

const isUniqueCharacters = (str) => {
  const chars = Array.from(str);
  let isUnique = null;
  chars.map((char, index, arr) => {
    // check for uniques
    if (arr.indexOf(char) !== index) {
      // ifi there is no unique characters, then set isUnique to false
      isUnique = false
    } else {
      isUnique = true
    }
  })
  return isUnique;
}

const test1 = 'abcdef';
const test2 = 'aabbccddee';
const test3 = 'abcdeff';
const test4 = 'abcgze';

/* TESTS */
console.log('tests');
console.log(isUniqueCharacters(test1), 'true');
console.log(isUniqueCharacters(test2), 'false');
console.log(isUniqueCharacters(test3), 'false');
console.log(isUniqueCharacters(test4), 'true');

