// sort array by comparing the temp value to the left value and shift the left value to the right if the temp value is greater than the left value.
// insert into the gap created by shifting the left value to the right
// function insertionSort (arr) {
//   for (let i = 1; i < arr.length; i++) {
//     let tempVal = arr[i];
//     let position = i - 1;
//     while (position >= 0) {
//       if (arr[position] > tempVal) {
//         arr[position + 1] = arr[position];
//         position--;
//       } else {
//         break;
//       }
//     }
//     // insert into the gap created by shifting the left value to the right
//     arr[position + 1] = tempVal;
//   }
//   return arr;
// }

function insertionSort (arr) {
  for (let i = 1; i < arr.length; i++) {
    let tempVal = arr[i];
    let positionIndex = i - 1;
    while (positionIndex >= 0) {
      if (arr[positionIndex] > tempVal) {
        // let's shift the left value to the right
        arr[positionIndex + 1] = arr[positionIndex];
        // decrement the position index
        positionIndex--;
      } else {
        break;
      }
    }
    // insert into the gap created by shifting the left value to the right
    arr[positionIndex + 1] = tempVal;
  }
  return arr;
}


let testArr = [4, 2, 7, 1, 3];
console.log(insertionSort(testArr));