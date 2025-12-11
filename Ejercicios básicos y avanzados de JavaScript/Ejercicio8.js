
const avengers = [
  "Hulk",
  "Thor",
  "Iron Man",
  "Captain A.",
  "Spiderman",
  "Captain M.",
];
function findLongestWord(stringList) {

  let mayor = stringList[0]; 

  for (let i = 1; i < stringList.length; i++) {

    if (stringList[i].length > mayor.length) {

      mayor = stringList[i]; 
    }
  }
  return mayor;
}

console.log(findLongestWord(avengers)); 