// show me how to do a quick search on an array
//  - write a function that takes in an array and a value
//  - loop through the array and check if the current array value is equal to the value
//  - if it is, return the index
//  - if not, continue looping
//  - if we get to the end of the array and haven't found the value, return -1

function quickSearch (arr, val) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === val) {
      return i;
    }
  }
  return -1;
}

let testArr = [1, 2, 3, 4, 5];
console.log(quickSearch(testArr, 3));

