// write a function that takes in an array of unsorted values
// sort values by comparing the lowest value to the next value
// do a swap if the next value is lower than the current value
// return array

function selectionSort(arr) {
  for (let i = 0; i < arr.length - 1; i++) { // we only need to go to the second last value because the array will be sorted by the time we get to the last value
    // keep track of the lowest value's index
    let lowest = i;
    // run through the array inside the outer loop
    for (let j = i + 1; j < arr.length; j++) {
      // if the next value is lower than the current value
      if (arr[j] < arr[lowest]) {
        // set the lowest value to the next value
        lowest = j;
      }
    }
    // lets do a swap if the lowest value is not the current value
    if (i !== lowest) {
      let temp = arr[i];
      arr[i] = arr[lowest];
      arr[lowest] = temp;
    }
  }
  return arr;
}


const testArr = [4, 2, 7, 1, 3];
console.log(selectionSort(testArr));


