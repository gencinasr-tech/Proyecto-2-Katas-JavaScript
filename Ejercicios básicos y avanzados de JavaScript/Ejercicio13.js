
const names = [
  'Peter',
  'Steve',
  'Tony',
  'Natasha',
  'Clint',
  'Logan',
  'Xabier',
  'Bruce',
  'Peggy',
  'Jessica',
  'Marc'
];
function nameFinder(nameList) {
  const inputName = prompt("Escribe un nombre");
  for (let i = 0; i < nameList.length; i++) {
    if (inputName === nameList[i]) {
      alert(true);
      return true;
    }}
        alert(false);
        return false;
}
nameFinder(names)
