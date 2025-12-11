
const words = [
  'code',
  'repeat',
  'eat',
  'sleep',
  'code',
  'enjoy',
  'sleep',
  'code',
  'enjoy',
  'sleep',
  'code'
];
function countRepetitions(wordList) {
  let counts = {};
  for (let i = 0; i < wordList.length; i++) {
    let palabra = wordList[i];
    if (counts[palabra]) {
      counts[palabra]++;
    } else {
      counts[palabra] = 1;
    }
  }
  return counts;
}

console.log(countRepetitions(words));