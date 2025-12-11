console.log("--- Ejercicio 1.1 ---");

const game = {
    title: 'The Last of Us 2', 
    gender: ['action', 'zombie', 'survival'], 
    year: 2020
}
const { title, gender, year } = game
console.log(year);

console.log("--- Ejercicio 1.2 ---");

const fruits = ['Banana', 'Strawberry', 'Orange'];

const [fruit1, fruit2, fruit3] = fruits;
console.log(fruit1);
console.log(fruit2);
console.log(fruit3);

console.log("--- Ejercicio 1.3 ---");

const animalFunction = () => {
    return {name: 'Bengal Tiger', race: 'Tiger'} 
};

const { name, race} = animalFunction();
console.log(race);
console.log(name);

console.log("--- Ejercicio 1.4 ---");

const car = {name: 'Mazda 6', itv: [2015, 2011, 2020] }

const {name: nombre, itv} = car;
console.log(nombre);
const [ year1, year2, year3] = itv
console.log(year2);