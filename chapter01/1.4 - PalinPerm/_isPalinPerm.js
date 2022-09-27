function palinPerm (str) {
  let reverse = '';
  for (let i = str.length - 1; i >= 0; i--) {
    reverse += str.charAt(i);
  }
  return str === reverse;
}

function isPalin (str) {
  return str === str.split('').reverse().join('')
}
// TESTS
console.log(isPalin('Tact Coa'), 'true');
console.log(isPalin('Tact boa'), 'false');