// function oneAway(str1, str2) {
//   // check for differing lengths between str1 and str2.
//   // The difference of both yield a number
//   // if that number is greater than 1, then return false
//   if (Math.abs(str1.length - str2.length) > 1) {
//     return false
//   }
//   let isTooManyEdits = false;
//   // loop through both params, str1, and str2
//   // assign variables to correspond str1 and str2
//   // three apples comparison
//   for (let i = 0, j = 0; i < str1.length && j < str2.length; i++, j++) {
//     if (str1[i] !== str2[j]) {
//       // let's handle the case where lengths are equal but one too many edits
//       if (isTooManyEdits) {
//         // if true, then return false to stop loop
//         return false;
//       }
//       console.log(str1[i], str2[j], i, j)
//       // lets handle "pale" and "ple", a character is deleted in either str1 or str2
//       if (str1.length > str2.length) {
//         console.log("decrement j", j)
//         j--; // decrement j. we've deleted a character in str2
//       } else if (str1.length < str2.length) {
//         console.log('decrement i', i)
//         i--; // decrement i. we've deleted a character in str1
//       }
//       isTooManyEdits = true
//     }
//   }
//   return true;
// }
function oneAway (str1, str2) {
  if (Math.abs(str1.length - str2.length) > 1) {
    return false
  }

  let isTooManyEdits = false;
  let count = 0
  const str1Arr = str1.split("");
  const str2Arr = str2.split("");
  console.log({str1Arr, str2Arr})
  str1Arr.map((arr1) => {
    //console.log(arr1, str2Arr.indexOf(arr1))
    if (str2Arr.indexOf(arr1) === -1) {
      count++
    }
    //console.log({count})
    if (count > 1) {
      isTooManyEdits = true
    }
  })

  if (isTooManyEdits) {// more than 1 edit
    return false;
  } else {
    return true; // zero or 1 edit
  }
}
console.log(oneAway('pale', 'pale'), true);
console.log(oneAway('pale', 'ple'), true);
console.log(oneAway('pales', 'pale'), true);
console.log(oneAway('pale', 'bale'), true);
console.log(oneAway('pale', 'bake'), false);
console.log(oneAway('pale', 'bae'), false);
