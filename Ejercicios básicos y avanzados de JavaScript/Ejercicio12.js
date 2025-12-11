

const duplicates = [
  'sushi',
  'pizza',
  'burger',
  'potatoe',
  'pasta',
  'ice-cream',
  'pizza',
  'chicken',
  'onion rings',
  'pasta',
  'soda'
];

function removeDuplicates(list) {
    let sinduplicar = []
  for (let i=0; i<duplicates.length; i++){
if (!sinduplicar.includes(duplicates[i])) {
      sinduplicar.push(duplicates[i]);}
}
return sinduplicar;
}

console.log(removeDuplicates(duplicates));
