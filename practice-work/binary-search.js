function binarySearch (arr, searchValue) {
  let lower = 0;
  let higher = arr.length - 1;
  let count = 0;
  while (lower <= higher) {
    let midpointIndex = Math.floor((lower + higher) / 2);
    let midpointValue = arr[midpointIndex]
    console.log(`steps: ${count}`)
    if (midpointValue === searchValue) {
      count++
      return true;
    } else if (midpointValue < searchValue) {
      lower = midpointIndex + 1;
      count++
    } else {
      higher = midpointIndex - 1;
      count++
    }
  }
  return false;
}
const arr = [1, 2, 4, 8, 16, 32, 128];
console.log(binarySearch(arr, 129), false);
console.log(binarySearch(arr, 5), false);
console.log(binarySearch(arr, 4), true);
console.log(binarySearch(arr, 128), true);
