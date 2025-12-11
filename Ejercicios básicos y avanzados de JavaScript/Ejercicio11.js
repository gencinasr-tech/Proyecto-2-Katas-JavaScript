
  function averageWord(list) {
  
    let suma = 0;

  for (let i = 0; i < list.length; i++) {
    if (typeof list[i] === "number") {

        suma += list[i];}
      
      else if (typeof list[i] === "string") {
      suma += list[i].length;
    }
  }
  return suma;
}

const mixedElements = [
  6,
  1,
  "Marvel",
  1,
  "hamburguesa",
  "10",
  "Prometeo",
  8,
  "Hola mundo",
];

console.log(averageWord(mixedElements));
