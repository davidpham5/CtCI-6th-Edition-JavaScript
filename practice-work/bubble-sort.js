/*
  given an array of unsorted values, write a function where an array is sorted in ascending order.
*/

function bubbleSort (arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < (arr.length - i - 1); j++) {
      if (arr[j] > arr[j + 1]) {
        let toSwapIndex = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = toSwapIndex;
      }
    }
  }

  return arr;
} // O(n^2)

function bubbleSortPro (arr) {
  for (let i = 0; i < arr.length; i++) {
    let sorted = false;

    for (let j = 0; j < arr.length - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        // lets swap
        let currentIndex = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = currentIndex;
        sorted = true;
      }
    }

    if (!sorted) break;
  }
  return arr;

}// O(n^2)

let testArr = [234, 43, 55, 63,  5, 6, 235, 547, -1];
console.log(bubbleSortPro(testArr))