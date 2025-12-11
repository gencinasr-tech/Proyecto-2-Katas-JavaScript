console.log("--- Ejercicio 3.1 ---");

const users = [
	{id: 1, name: 'Abel'},
	{id:2, name: 'Julia'},
	{id:3, name: 'Pedro'},
	{id:4, name: 'Amanda'}
];
const nombres = users.map(user => user.name);
console.log(nombres);

console.log("--- Ejercicio 3.2 ---");

const modifiedNames = users.map(user => {
    if (user.name.startsWith("A")){
       return "Anacleto"
    }
    else {
        return user.name
    }
});

console.log(modifiedNames);

console.log("--- Ejercicio 3.3 ---");

const cities = [
	{isVisited:true, name: 'Tokyo'},
	{isVisited:false, name: 'Madagascar'},
	{isVisited:true, name: 'Amsterdam'},
	{isVisited:false, name: 'Seul'}
];

const citylist = cities.map(ciudad => {
    if (ciudad.isVisited === true){
        return ciudad.name + " Visitado"
    }
    else {
        return ciudad.name
    }
})
console.log(citylist);
