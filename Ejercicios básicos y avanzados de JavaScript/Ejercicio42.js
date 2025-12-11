
  function swap(array, index1, index2){
  let text = array[index1];
  array[index1] = array[index2];
  array[index2] = text;
  return array;
}
    


const fantasticFour = [
  "La antorcha humana",
  "Mr. Fantástico",
  "La mujer invisible",
  "La cosa",
];
console.log(swap(fantasticFour, 0, 3));