console.log("--- Ejercicio 2.1 ---");

const pointsList = [32, 54, 21, 64, 75, 43];
const copy = [...pointsList]
console.log(copy);

console.log("--- Ejercicio 2.2 ---");

const toy = {name: 'Bus laiyiar', date: '20-30-1995', color: 'multicolor'};

const toycopy = {...toy}
console.log(toycopy);

console.log("--- Ejercicio 2.3 ---");

const pointsList1 = [32, 54, 21, 64, 75, 43];
const pointsLis2 = [54, 87, 99, 65, 32];

const newPonits = [...pointsList1, ...pointsLis2]
console.log(newPonits);

console.log("--- Ejercicio 2.4 ---");

const toy1 = {name: 'Bus laiyiar', date: '20-30-1995', color: 'multicolor'};
const toyUpdate = {lights: 'rgb', power: ['Volar like a dragon', 'MoonWalk']}

const toyfull = {...toy1, ...toyUpdate};
console.log(toyfull);

console.log("--- Ejercicio 2.5 ---");

const colors = ['rojo', 'azul', 'amarillo', 'verde', 'naranja']; 

const colorcopy = [...colors]
colorcopy.splice(1,1);
console.log(colorcopy);
