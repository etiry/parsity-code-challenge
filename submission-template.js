const findSum = function(array) {
  let sum = 0;
  for (i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return sum;
};

const findFrequency = function(array) {
  const countedStrings = [];
  array.forEach(string => {
    let count = 0;
    let comparisonString = string;
    array.forEach(string => {
      string === comparisonString ? count += 1 : count;
    })
    const countedString = {string: string, count: count};
    countedStrings.push(countedString);
  })
  sorted = countedStrings.sort((a, b) => a.count - b.count);
  frequency = {most: (sorted[sorted.length - 1].string), least: (sorted[0].string)}
  return frequency;

}

const isPalindrome = function(str) {
  const lowerString = str.toLowerCase();
  return lowerString.split('').reverse().join('') === lowerString;
};

const largestPair = function(array) {
  let product = null;
  for (i = 0; i < array.length; i++) {
    if (array[i] * array[i + 1] > product) {
      product = array[i] * array[i + 1];
    } 
  }
  return product;
};

const removeParenth = function(str) {
  const openParenth = str.indexOf('(');
  const closeParenth = str.indexOf(')');
  return str.substring(0, openParenth) + str.substring(closeParenth + 1);
};

const scoreScrabble = function(str) {
  let score = null;
  const onePointLetters = ['a', 'e', 'i', 'o', 'u', 'l', 'n', 'r', 's', 't'];
  const twoPointLetters = ['d', 'g'];
  const threePointLetters = ['b', 'c', 'm', 'p'];
  const fourPointLetters = ['f', 'h', 'v', 'w', 'y'];
  const fivePointLetters = ['k'];
  const eightPointLetters = ['j', 'x'];
  const tenPointLetters = ['q', 'z'];
  for (let letter of str) {
    onePointLetters.includes(letter) ? score += 1 : score;
    twoPointLetters.includes(letter) ? score += 2 : score;
    threePointLetters.includes(letter) ? score += 3 : score;
    fourPointLetters.includes(letter) ? score += 4 : score;
    fivePointLetters.includes(letter) ? score += 5 : score;
    eightPointLetters.includes(letter) ? score += 8 : score;
    tenPointLetters.includes(letter) ? score += 10 : score;
  }
  return score;
};

