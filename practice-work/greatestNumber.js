function greatestNumber (arr) {
  let greatestNumberSoFar = arr[0]

  for (let i in arr) {
    if (arr[i] > greatestNumberSoFar) {
      greatestNumberSoFar = arr[i]
    }

  }
  return greatestNumberSoFar;
}

const testArr = [234, 43, 55, 63,  5, 6, 235, 547, -1];
console.log(greatestNumber(testArr))