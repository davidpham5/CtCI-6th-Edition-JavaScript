function checkPermute(str1, str2) {
  // check length both parameters. if not equal, return false
  if (str1.length !== str2.length) {
    return false
  } else {
    // here's where the magic happens
    // first we need to acknowledge that how each parameter is sorted is not relevant.
    // instead as long as they are sorted we can compare them
    // convert str1 and str2 to arrays, sort, and join
    const _sortedStr1 = str1.split('').sort().join('');
    const _sortedStr2 = str2.split('').sort().join('');
    // lets compared them and return a boolean result
    return _sortedStr1 === _sortedStr2;
  }
}
// Tests
console.log(checkPermute('aba', 'aab'), true);
console.log(checkPermute('aba', 'aaba'), false);
console.log(checkPermute('aba', 'aa'), false);