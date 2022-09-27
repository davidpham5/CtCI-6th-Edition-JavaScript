function urlify (str) {
  return str.trim(' ').replace(/ /g, '%20');
}

function urlify_2 (str) {
  const convertToArray = str.trim(' ').split('');

  for (let i in convertToArray) {
    if (convertToArray[i] === ' ') {
      convertToArray[i] = '%20';
    }
  }
  return convertToArray.join('');
}
console.log(urlify('Mr John Smith    ', 13), 'Mr%20John%20Smith');
console.log(urlify_2('Mr John Smith    ', 13), 'Mr%20John%20Smith');